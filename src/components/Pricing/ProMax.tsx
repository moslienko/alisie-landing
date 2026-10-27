'use client'
import { getData } from './Pricing.data'
import { useLocale } from '../../i18n/useLocale'
import { APP_STORE_URL } from '../../config/appStats'

const icons: Record<string, React.ReactNode> = {
    trends: (
        <svg viewBox='0 0 24 24' className='w-14 h-14' aria-hidden='true'>
            <polyline points='5.9 15.4 9 11.1 12.4 13.7 15.6 9.4'
                fill='none' stroke='#fff' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
            <polygon points='18.2 6.5 18.2 10.1 14.6 7.6'
                fill='#fff' stroke='#fff' strokeWidth='1.3' strokeLinejoin='round' />
        </svg>
    ),
    connections: (
        <svg viewBox='0 0 24 24' className='w-14 h-14' aria-hidden='true'>
            <polyline points='10.6 17.3 5.5 14 9.4 9 14.7 11.8 18.4 6.7'
                fill='none' stroke='#fff' strokeWidth='0.9' strokeLinejoin='round' />
            <g fill='#fff'>
                <circle cx='5.5' cy='14' r='1.8' />
                <circle cx='9.4' cy='9' r='1.8' />
                <circle cx='14.7' cy='11.8' r='1.8' />
                <circle cx='18.4' cy='6.7' r='1.8' />
                <circle cx='10.6' cy='17.3' r='1.8' />
            </g>
        </svg>
    ),
}

export default function ProMax() {
    const data = getData(useLocale())
    const { proMax } = data;

    return (
        <section className='flex flex-col py-16'>
            <div className='text-center mb-12'>
                <h2 className="inline-block text-4xl sm:text-5xl md:text-6xl font-bold
                    bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                    bg-clip-text text-transparent py-2">
                    {proMax.title}
                </h2>
                <p className='text-xl font-normal text-color mt-4 opacity-70 max-w-2xl mx-auto'>
                    {proMax.subtitle}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full'>
                {proMax.extensions.map((ext) => (
                    <div
                        key={ext.id}
                        className='extensionCard relative p-6 rounded-3xl border-2 overflow-hidden flex flex-col'
                    >
                        <div className='extensionTint absolute inset-0 rounded-3xl pointer-events-none'></div>

                        <div className='relative z-10 flex flex-col h-full'>
                            <div className='flex items-start justify-between gap-4'>
                                <div className={`extensionIcon extensionIcon--${ext.icon} flex items-center justify-center w-14 h-14 rounded-2xl overflow-hidden`}>
                                    {icons[ext.icon]}
                                </div>
                                <span className='extensionPrice text-2xl font-bold bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)] bg-clip-text text-transparent'>
                                    {ext.price}
                                </span>
                            </div>

                            <h2 className='text-2xl font-bold text-color mt-5'>{ext.name}</h2>
                            <p className='text-base text-color opacity-70 mt-2 flex-grow'>{ext.description}</p>

                            <a
                                href={APP_STORE_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='pricingBtnFree inline-flex h-11 px-6 text-base font-bold rounded-xl items-center justify-center w-full mt-6 text-color'
                            >
                                {proMax.cta}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-center text-sm text-color opacity-50 mt-8 max-w-xl mx-auto px-4'>
                {proMax.footnote}
            </p>
        </section>
    );
}
