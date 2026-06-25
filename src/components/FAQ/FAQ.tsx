'use client'
import { useState } from 'react'
import { clsx } from 'clsx'
import { getData } from './FAQ.data'
import { useLocale } from '../../i18n/useLocale'

export default function FAQ() {
    const data = getData(useLocale())
    const [openId, setOpenId] = useState<string | null>(data.items[0]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <section id='faq' className='flex flex-col py-16 scroll-mt-24'>
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

            <div className='flex flex-col gap-4 max-w-3xl mx-auto w-full'>
                {data.items.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                        <div
                            key={item.id}
                            className={clsx(
                                'faqCard relative rounded-3xl border-2 overflow-hidden',
                                isOpen && 'faqCardOpen'
                            )}
                        >
                            <div className='faqTint absolute inset-0 rounded-3xl pointer-events-none'></div>
                            <button
                                type='button'
                                onClick={() => toggle(item.id)}
                                aria-expanded={isOpen}
                                className='relative z-10 w-full text-left flex items-center justify-between gap-5 p-6'
                            >
                                <span className='text-lg md:text-xl font-semibold text-color'>
                                    {item.question}
                                </span>
                                <span
                                    className={clsx(
                                        'faqChevron flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0',
                                        isOpen && 'faqChevronOpen'
                                    )}
                                    aria-hidden='true'
                                >
                                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4'>
                                        <polyline points='6 9 12 15 18 9' />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={clsx(
                                    'faqAnswer relative z-10 overflow-hidden',
                                    isOpen ? 'faqAnswerOpen' : 'faqAnswerClosed'
                                )}
                            >
                                <p className='text-base text-color opacity-80 leading-relaxed px-6 pb-6'>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
