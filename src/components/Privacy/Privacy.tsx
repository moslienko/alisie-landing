'use client'
import { getData } from './Privacy.data'
import { useLocale } from '../../i18n/useLocale'

const icons: Record<string, React.ReactNode> = {
    lock: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
            <path d='M7 11V7a5 5 0 0 1 10 0v4' />
        </svg>
    ),
    cloud: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <path d='M17.5 19a4.5 4.5 0 1 0 0-9h-1.8A7 7 0 1 0 4 15.5' />
        </svg>
    ),
    'eye-off': (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' />
            <line x1='1' y1='1' x2='23' y2='23' />
        </svg>
    ),
    'user-x': (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
            <circle cx='8.5' cy='7' r='4' />
            <line x1='18' y1='8' x2='23' y2='13' />
            <line x1='23' y1='8' x2='18' y2='13' />
        </svg>
    ),
}

export default function Privacy() {
    const data = getData(useLocale())
    return (
        <section className='flex flex-col py-16'>
            <div className='text-center mb-12'>
                <h2 className="inline-block text-5xl md:text-6xl font-bold
                    bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                    bg-clip-text text-transparent py-2">
                    {data.title}
                </h2>
                <p className='text-xl font-normal text-color mt-4 opacity-70 max-w-2xl mx-auto'>
                    {data.subtitle}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full'>
                {data.points.map((point) => (
                    <div
                        key={point.id}
                        className='privacyCard relative p-6 rounded-3xl border-2 overflow-hidden flex items-start gap-5'
                    >
                        <div className='privacyTint absolute inset-0 rounded-3xl pointer-events-none'></div>
                        <div className='relative z-10 flex items-start gap-5'>
                            <div className='privacyIcon flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0'>
                                {icons[point.icon]}
                            </div>
                            <div>
                                <h2 className='text-xl font-bold text-color'>{point.title}</h2>
                                <p className='text-base text-color opacity-70 mt-2 leading-relaxed'>
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
