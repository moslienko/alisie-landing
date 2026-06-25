'use client'
import { getData } from './Pricing.data'
import { useLocale } from '../../i18n/useLocale'
import { APP_STORE_URL } from '../../config/appStats'

const icons: Record<string, React.ReactNode> = {
    trends: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <polyline points='23 6 13.5 15.5 8.5 10.5 1 18' />
            <polyline points='17 6 23 6 23 12' />
        </svg>
    ),
    connections: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-7 h-7'>
            <circle cx='6' cy='6' r='2.5' />
            <circle cx='18' cy='6' r='2.5' />
            <circle cx='6' cy='18' r='2.5' />
            <circle cx='18' cy='18' r='2.5' />
            <circle cx='12' cy='12' r='2.5' />
            <line x1='8' y1='7.5' x2='10.5' y2='10.5' />
            <line x1='16' y1='7.5' x2='13.5' y2='10.5' />
            <line x1='8' y1='16.5' x2='10.5' y2='13.5' />
            <line x1='16' y1='16.5' x2='13.5' y2='13.5' />
        </svg>
    ),
}

export default function ProMax() {
    const data = getData(useLocale())
    const { proMax } = data;

    return (
        <section className='flex flex-col py-16'>
            <div className='text-center mb-12'>
                <h1 className="inline-block text-5xl md:text-6xl font-bold
                    bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                    bg-clip-text text-transparent py-2">
                    {proMax.title}
                </h1>
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
                                <div className='extensionIcon flex items-center justify-center w-14 h-14 rounded-2xl'>
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
