'use client'
import { getData } from './HowItWorks.data'
import { useLocale } from '../../i18n/useLocale'

const icons: Record<string, React.ReactNode> = {
    memory: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <path d='M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-2 7.5V17a3 3 0 0 0 6 0v-3' />
            <path d='M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7.5V17a3 3 0 0 1-6 0' />
            <path d='M9 13h.01' />
            <path d='M15 13h.01' />
        </svg>
    ),
    patterns: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <circle cx='12' cy='12' r='10' />
            <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10' />
            <path d='M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10' />
            <line x1='2' y1='12' x2='22' y2='12' />
        </svg>
    ),
    lucid: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
            <circle cx='12' cy='12' r='3' />
        </svg>
    ),
    archive: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <path d='M4 4h16v4H4z' />
            <path d='M6 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8' />
            <line x1='10' y1='13' x2='14' y2='13' />
        </svg>
    ),
}

export default function HowItWorks() {
    const data = getData(useLocale())
    return (
        <section id='why' className='flex flex-col py-16 scroll-mt-24'>
            <div className='text-center mb-12'>
                <h1 className="inline-block text-5xl md:text-6xl font-bold
                    bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                    bg-clip-text text-transparent py-2">
                    {data.title}
                </h1>
                <p className='text-xl font-normal text-color mt-4 opacity-70 max-w-2xl mx-auto'>
                    {data.subtitle}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full'>
                {data.reasons.map((reason) => (
                    <div
                        key={reason.id}
                        className='reasonCard relative p-6 rounded-3xl border-2 overflow-hidden flex items-start gap-5'
                    >
                        <div className='reasonTint absolute inset-0 rounded-3xl pointer-events-none'></div>
                        <div className='relative z-10 flex items-start gap-5'>
                            <div className='reasonIcon flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0'>
                                {icons[reason.icon]}
                            </div>
                            <div>
                                <h2 className='text-xl font-bold text-color'>{reason.title}</h2>
                                <p className='text-base text-color opacity-70 mt-2 leading-relaxed'>
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
