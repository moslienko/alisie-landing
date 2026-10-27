import { useEffect, useId, useRef } from 'react'
import type { CSSProperties } from 'react'

const stars = Array.from({ length: 170 }, (_, index) => {
    const random = (salt: number) => {
        const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453
        return value - Math.floor(value)
    }
    return {
        x: random(1) * 1440,
        y: random(2) * 1000,
        radius: 0.5 + random(3) * 1.15,
        opacity: 0.2 + random(4) * 0.45,
        duration: 4 + random(5) * 6,
        delay: -random(6) * 10,
    }
})

const vertexSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
`

const fragmentSource = `
    precision mediump float;
    uniform vec2 resolution;
    uniform float time;
    float band(float distance, float width) {
        return exp(-pow(distance / width, 2.0));
    }
    void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        uv.y = 1.0 - uv.y;
        float first = band(uv.y - (0.67 + 0.13 * sin(4.0 * uv.x + time)), 0.18)
                    * (0.28 + 0.72 * uv.x);
        float second = band(uv.y - (0.35 + 0.15 * sin(3.0 * uv.x - time)), 0.13)
                     * (0.9 - 0.6 * uv.x);
        float halo = exp(-pow((uv.x - (0.8 + 0.07 * sin(time))) / 0.28, 2.0)
                         -pow((uv.y - 0.65) / 0.5, 2.0));
        float violet = second * 0.48;
        float raspberry = first * 0.86 + halo * 0.28;
        float total = max(violet + raspberry, 1.0);
        vec3 color = vec3(0.012)
            + vec3(0.6, 0.0, 1.0) * violet / total
            + vec3(0.808, 0.035, 0.824) * raspberry / total;
        color *= mix(0.45, 0.66, smoothstep(0.0, 0.9, uv.x));
        color *= 1.0 - 0.2 * length(uv - 0.5);
        float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        gl_FragColor = vec4(color + (grain - 0.5) / 255.0, 1.0);
    }
`

export default function DreamBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const id = useId()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, powerPreference: 'low-power' })
        if (!gl) return

        const compile = (type: number, source: string) => {
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                gl.deleteShader(shader)
                return null
            }
            return shader
        }
        const vertex = compile(gl.VERTEX_SHADER, vertexSource)
        const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource)
        const program = gl.createProgram()
        if (!vertex || !fragment || !program) {
            if (vertex) gl.deleteShader(vertex)
            if (fragment) gl.deleteShader(fragment)
            if (program) gl.deleteProgram(program)
            return
        }
        gl.attachShader(program, vertex)
        gl.attachShader(program, fragment)
        gl.linkProgram(program)
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            gl.deleteProgram(program)
            gl.deleteShader(vertex)
            gl.deleteShader(fragment)
            return
        }
        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
        gl.useProgram(program)
        const position = gl.getAttribLocation(program, 'position')
        gl.enableVertexAttribArray(position)
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
        const resolution = gl.getUniformLocation(program, 'resolution')
        const time = gl.getUniformLocation(program, 'time')
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
        let animation = 0
        let lastFrame = 0
        let phase = 0.9
        let contextLost = false

        const draw = () => {
            if (contextLost) return
            gl.uniform1f(time, phase)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
            canvas.style.opacity = '1'
        }
        const resize = () => {
            const rect = canvas.getBoundingClientRect()
            const scale = Math.min(1, 1400 / Math.max(rect.width, rect.height))
            canvas.width = Math.max(1, Math.round(rect.width * scale))
            canvas.height = Math.max(1, Math.round(rect.height * scale))
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.uniform2f(resolution, canvas.width, canvas.height)
            draw()
        }
        const animate = (now: number) => {
            if (now - lastFrame >= 1000 / 24) {
                phase += Math.min(now - lastFrame, 100) / 1000 * Math.PI * 2 / 38
                lastFrame = now
                draw()
            }
            animation = requestAnimationFrame(animate)
        }
        const updateMotion = () => {
            cancelAnimationFrame(animation)
            draw()
            if (!reducedMotion.matches && !document.hidden && !contextLost) {
                lastFrame = performance.now()
                animation = requestAnimationFrame(animate)
            }
        }
        const loseContext = (event: Event) => {
            event.preventDefault()
            contextLost = true
            cancelAnimationFrame(animation)
            canvas.style.opacity = '0'
        }
        const observer = new ResizeObserver(resize)
        observer.observe(canvas)
        reducedMotion.addEventListener('change', updateMotion)
        document.addEventListener('visibilitychange', updateMotion)
        canvas.addEventListener('webglcontextlost', loseContext)
        resize()
        updateMotion()
        return () => {
            cancelAnimationFrame(animation)
            observer.disconnect()
            reducedMotion.removeEventListener('change', updateMotion)
            document.removeEventListener('visibilitychange', updateMotion)
            canvas.removeEventListener('webglcontextlost', loseContext)
            gl.deleteBuffer(buffer)
            gl.deleteProgram(program)
            gl.deleteShader(vertex)
            gl.deleteShader(fragment)
        }
    }, [])

    return (
        <div className='dream-sky' aria-hidden='true'>
            <svg className='dream-sky-fallback' viewBox='0 0 1440 1000' preserveAspectRatio='none'>
                <defs>
                    <linearGradient id={`${id}-wave`}>
                        <stop stopColor='#9900ff' stopOpacity='.3' />
                        <stop offset='1' stopColor='#ce09d2' stopOpacity='.55' />
                    </linearGradient>
                    <filter id={`${id}-soft`} x='-30%' y='-70%' width='160%' height='240%'>
                        <feGaussianBlur stdDeviation='65' />
                    </filter>
                </defs>
                <path d='M-200 700 C100 850 360 250 690 590 S1100 820 1650 340'
                    fill='none' stroke={`url(#${id}-wave)`} strokeWidth='175' filter={`url(#${id}-soft)`} />
                <path d='M-200 250 C200 120 420 530 790 300 S1250 130 1650 390'
                    fill='none' stroke='#9900ff' strokeOpacity='.16' strokeWidth='95' filter={`url(#${id}-soft)`} />
            </svg>
            <canvas ref={canvasRef} className='dream-sky-canvas' />
            <svg className='dream-sky-stars' viewBox='0 0 1440 1000' preserveAspectRatio='xMidYMid slice'>
                {stars.map((star, index) => (
                    <circle key={index} cx={star.x} cy={star.y} r={star.radius} fill='#f7edff'
                        className='dream-star' style={{
                            '--star-opacity': star.opacity,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                        } as CSSProperties} />
                ))}
                {stars.filter((_, index) => index % 43 === 0).map((star, index) => (
                    <path key={index} d={`M${star.x - 3.5} ${star.y}h7 M${star.x} ${star.y - 3.5}v7`}
                        stroke='#f7edff' strokeWidth='.7' opacity='.55' />
                ))}
            </svg>
        </div>
    )
}
