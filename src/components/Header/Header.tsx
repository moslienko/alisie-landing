'use client'

import { getData } from "./Header.data"
import { useTheme } from "../../hooks/useTheme"
import { useLocale } from "../../i18n/useLocale"
import { screenshotSrc } from "../../utils/screenshots"

export default function Header() {
    const { theme } = useTheme();
    const data = getData(useLocale());

    return (
        <section className='flex flex-col py-10'>
            <div className='block text-center md:flex md:text-left'>
                <div className='block'>
                    <img
                        className='w-24 aspect-square object-cover mb-10 mx-auto md:mx-0 rounded-[22%]'
                        src={data.icon}
                        alt='app icon'
                    />
                    <h1 className="font-playfair inline-block text-6xl font-bold
      bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
      bg-clip-text text-transparent py-2">
                        {data.name}
                    </h1>

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
                <img
                    className='w-80 object-cover mx-auto mt-5 md:-mt-5 md:ml-auto md:mx-0'
                    src={screenshotSrc(data.screenshot, theme)}
                    alt='app screenshot'
                />
            </div>
        </section>
    );
}
