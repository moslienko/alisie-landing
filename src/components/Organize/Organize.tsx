'use client'
import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { clsx } from 'clsx'
import { getData } from './Organize.data'
import type { OrganizeItem } from './Organize.data'
import { useTheme } from '../../hooks/useTheme'
import { useLocale } from '../../i18n/useLocale'
import { screenshotSrc } from '../../utils/screenshots'

const FOLDER = 'M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224h400c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2.1-32.1l112-192z'
const TAG = 'M0 80v149.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'

const folder = (
    <svg viewBox='0 0 24 24' className='w-full h-full' aria-hidden='true'>
        <svg x='5.4' y='5.4' width='13.2' height='13.2' viewBox='0 0 576 512'>
            <path d={FOLDER} fill='#fff' />
        </svg>
    </svg>
)

const ICONS: Record<OrganizeItem['id'], React.ReactNode> = {
    tags: (
        <svg viewBox='0 0 24 24' className='w-full h-full' aria-hidden='true'>
            <svg x='5.6' y='5.6' width='12.8' height='12.8' viewBox='0 0 448 512'>
                <path d={TAG} fill='#fff' transform='translate(448 0) scale(-1 1)' />
            </svg>
        </svg>
    ),
    categories: folder,
    smart: folder,
    filter: (
        <svg viewBox='0 0 24 24' className='w-full h-full' aria-hidden='true'>
            <g stroke='#fff' strokeWidth='1.3' strokeLinecap='round'>
                <line x1='5.9' y1='9.1' x2='17.4' y2='9.1' />
                <line x1='7.8' y1='12.4' x2='15.6' y2='12.4' />
                <line x1='10' y1='15.7' x2='13.4' y2='15.7' />
            </g>
        </svg>
    ),
}

// A wide feature card: switch between four ways to organize dreams, the phone shows the matching screen.
export default function Organize() {
    const { theme } = useTheme()
    const data = getData(useLocale())
    const [active, setActive] = useState(0)
    const tabs = useRef<(HTMLButtonElement | null)[]>([])

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1
            : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
        if (!step) return
        e.preventDefault()
        const next = (active + step + data.items.length) % data.items.length
        setActive(next)
        tabs.current[next]?.focus()
    }

    return (
        <div id='organize' className='featureCard relative overflow-hidden mt-5 scroll-mt-24'>
            <div className='featureTint absolute inset-0 tintBackground opacity-0 blur-2xl pointer-events-none'></div>
            <div className='featureContent relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8'>
                <div className='p-8 md:pr-0 flex flex-col justify-center'>
                    <h3 className='font-sora font-semibold text-fg text-[24px] leading-tight'>{data.title}</h3>
                    <p className='font-sora font-semibold text-[rgb(var(--fg-rgb)/0.66)] text-[16px] leading-snug mt-2'>
                        {data.subtitle}
                    </p>

                    <div
                        role='tablist'
                        className='grid grid-cols-2 gap-2 mt-6'
                        onKeyDown={onKeyDown}
                    >
                        {data.items.map((item, i) => {
                            const selected = i === active
                            return (
                                <button
                                    key={item.id}
                                    ref={(el) => { tabs.current[i] = el }}
                                    id={`organize-tab-${item.id}`}
                                    role='tab'
                                    type='button'
                                    aria-selected={selected}
                                    aria-controls='organize-panel'
                                    tabIndex={selected ? 0 : -1}
                                    onClick={() => setActive(i)}
                                    onMouseEnter={() => setActive(i)}
                                    className={clsx(
                                        'organizeItem p-2 text-left flex items-center gap-3 cursor-pointer',
                                        selected && 'organizeItemActive',
                                    )}
                                >
                                    <span className={`organizeIcon organizeIcon--${item.id} flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden flex-shrink-0`}>
                                        {ICONS[item.id]}
                                    </span>
                                    <span className='font-sora font-semibold text-fg text-sm'>{item.title}</span>
                                </button>
                            )
                        })}
                    </div>

                    <p className='organizeText text-sm text-color opacity-70 mt-4 min-h-10' aria-live='polite'>
                        {data.items[active].description}
                    </p>
                </div>

                <div
                    id='organize-panel'
                    role='tabpanel'
                    aria-labelledby={`organize-tab-${data.items[active].id}`}
                    className='organizePhone relative h-[26rem] md:h-[30rem] overflow-hidden flex justify-center md:pr-12 md:pt-8'
                >
                    <div className='relative w-72'>
                        {data.items.map((item, i) => (
                            <img
                                key={item.id}
                                className={clsx(
                                    'featureImage w-full h-auto',
                                    i > 0 && 'absolute inset-x-0 top-0',
                                    i === active ? 'opacity-100' : 'opacity-0',
                                )}
                                src={screenshotSrc(item.image, theme)}
                                alt={i === active ? item.title : ''}
                                aria-hidden={i !== active}
                                loading='lazy'
                                decoding='async'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
