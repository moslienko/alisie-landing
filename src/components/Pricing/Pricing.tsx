'use client'
import { clsx } from 'clsx';
import { getData } from './Pricing.data'
import { useLocale } from '../../i18n/useLocale'
import { APP_STORE_URL } from '../../config/appStats'

export default function Pricing() {
    const data = getData(useLocale())

    return (
        <section id='pricing' className='flex flex-col py-16 scroll-mt-24'>
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
                {data.plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={clsx(
                            'pricingCard relative p-8 rounded-3xl border-2 overflow-hidden flex flex-col',
                            plan.featured ? 'pricingCardFeatured' : 'pricingCardFree'
                        )}
                    >
                        {plan.featured && plan.badge && (
                            <div className='pricingBadge absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold text-white'>
                                {plan.badge}
                            </div>
                        )}

                        <div className='pricingTint absolute inset-0 rounded-3xl pointer-events-none'></div>

                        <div className='relative z-10 flex flex-col h-full'>
                            <div>
                                <h2 className='text-3xl font-bold text-color'>{plan.name}</h2>
                                <p className='text-base text-color opacity-70 mt-1'>{plan.tagline}</p>
                            </div>

                            <div className='mt-6 mb-6'>
                                <div className='flex items-baseline gap-2'>
                                    <span className={clsx(
                                        'text-5xl font-bold',
                                        plan.featured
                                            ? 'bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)] bg-clip-text text-transparent'
                                            : 'text-color'
                                    )}>
                                        {plan.price}
                                    </span>
                                </div>
                                <p className='text-sm text-color opacity-60 mt-2'>{plan.priceNote}</p>
                            </div>

                            <ul className='flex flex-col gap-3 mb-8 flex-grow'>
                                {plan.features.map((f, i) => (
                                    <li key={i} className={clsx(
                                        'flex items-center gap-3 text-base',
                                        f.included ? 'text-color' : 'text-color opacity-40 line-through'
                                    )}>
                                        <span className={clsx(
                                            'pricingCheck flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0',
                                            f.included ? 'pricingCheckIncluded' : 'pricingCheckExcluded'
                                        )}>
                                            {f.included ? (
                                                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' className='w-3 h-3'>
                                                    <polyline points='20 6 9 17 4 12' />
                                                </svg>
                                            ) : (
                                                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' className='w-3 h-3'>
                                                    <line x1='18' y1='6' x2='6' y2='18' />
                                                    <line x1='6' y1='6' x2='18' y2='18' />
                                                </svg>
                                            )}
                                        </span>
                                        <span>{f.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={APP_STORE_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={clsx(
                                    'inline-flex h-12 px-8 gap-2 text-lg font-bold rounded-xl items-center justify-center w-full',
                                    plan.featured ? 'downloadBtn text-white' : 'pricingBtnFree text-color'
                                )}
                            >
                                <span>{plan.cta}</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-center text-sm text-color opacity-50 mt-8 max-w-xl mx-auto px-4'>
                {data.footnote}
            </p>
        </section>
    );
}
