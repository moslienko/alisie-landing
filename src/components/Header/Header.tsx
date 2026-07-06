'use client'

import { getData } from "./Header.data"
import { useLocale } from "../../i18n/useLocale"
import { screenshotSrc } from "../../utils/screenshots"

export default function Header() {
    const data = getData(useLocale());

    return (
        <section className='flex flex-col py-10'>
            <div className='block text-center md:flex md:text-left'>
                <div className='block'>
                    <img
                        className='w-24 aspect-square object-cover mb-10 mx-auto md:mx-0 rounded-[22%]'
                        src={data.icon}
                        alt='Alisie app icon'
                    />
                    <p className="font-playfair inline-block text-6xl font-bold
      bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
      bg-clip-text text-transparent py-2">
                        {data.name}
                    </p>

                    <h1 className="text-6xl font-normal text-color mt-1 whitespace-pre-line">{data.subtitle}</h1>
                    <p className="text-xl font-normal text-color mt-5 opacity-70 max-w-xl mx-auto md:mx-0">{data.caption}</p>
                    <a href={data.ctaLink}
                        target='_blank'
                        className='downloadBtn inline-flex h-12 px-8 gap-2
                    text-white text-lg font-bold
                    rounded-xl mt-5 items-center justify-center'>
                        <span>{data.ctaLabel}</span>
                        <svg className='downloadArrow w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                            <path d='M12 5v14' />
                            <path d='m19 12-7 7-7-7' />
                        </svg>
                    </a>
                    <div className='flex justify-center md:justify-start mt-5'>
                        <div className='ratingBadge inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[rgb(var(--fg-rgb)/0.1)] bg-[rgb(var(--fg-rgb)/0.04)]'>
                            {data.rating && (
                                <>
                                    <span className='flex items-center gap-1.5'>
                                        <span className='flex'>
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <svg key={i} viewBox='0 0 24 24' fill='#FFB300' className='w-4 h-4'>
                                                    <path d='M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2z' />
                                                </svg>
                                            ))}
                                        </span>
                                        <span className='font-bold text-color'>{data.rating}</span>
                                    </span>
                                    <span className='w-px h-4 bg-[rgb(var(--fg-rgb)/0.15)]' aria-hidden='true'></span>
                                </>
                            )}
                            <span className='text-sm text-color opacity-70'>{data.sinceLabel}</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-2 justify-items-center md:justify-items-start mt-5 text-sm max-w-xs md:max-w-md mx-auto md:mx-0'>
                        {data.trust.map((item) => (
                            <span
                                key={item}
                                className='flex items-center gap-2 justify-self-start'
                            >
                                <svg viewBox='0 0 24 24' fill='none' stroke='var(--color-tint-start)' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4 flex-shrink-0'>
                                    <polyline points='20 6 9 17 4 12' />
                                </svg>
                                <span className='text-color opacity-60'>{item}</span>
                            </span>
                        ))}
                    </div>
                </div>
                <span className='heroShot w-80 mx-auto mt-5 md:-mt-5 md:ml-auto md:mx-0'>
                    <img
                        className='heroShotDark w-80 object-cover'
                        src={screenshotSrc(data.screenshot, 'dark')}
                        alt={data.screenshotAlt}
                        width={1160}
                        height={2362}
                        fetchPriority='high'
                        decoding='async'
                    />
                    <img
                        className='heroShotLight w-80 object-cover'
                        src={screenshotSrc(data.screenshot, 'light')}
                        alt=''
                        aria-hidden='true'
                        width={1160}
                        height={2362}
                        loading='lazy'
                        decoding='async'
                    />
                </span>
            </div>
        </section>
    );
}
