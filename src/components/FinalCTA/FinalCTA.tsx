'use client'
import { getData } from './FinalCTA.data'
import { useTheme } from '../../hooks/useTheme'
import { useLocale } from '../../i18n/useLocale'
import { screenshotSrc } from '../../utils/screenshots'

export default function FinalCTA() {
    const { theme } = useTheme();
    const data = getData(useLocale());
    return (
        <section className='flex flex-col py-20'>
            <div className='finalCtaCard relative rounded-3xl border-2 overflow-hidden'>
                <div className='finalCtaTint absolute inset-0 rounded-3xl pointer-events-none'></div>
                <div className='relative z-10 flex flex-col md:flex-row items-center gap-10 p-10 md:p-16'>
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className="inline-block text-4xl md:text-6xl font-bold
                            bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                            bg-clip-text text-transparent py-2 leading-tight">
                            {data.title}
                        </h2>
                        <p className='text-xl font-normal text-color mt-5 opacity-70 max-w-xl mx-auto md:mx-0'>
                            {data.subtitle}
                        </p>
                        <a
                            href={data.ctaLink}
                            target='_blank'
                            className='downloadBtn inline-flex h-14 px-10 gap-2
                                text-white text-lg font-bold
                                rounded-xl mt-8 items-center justify-center'
                        >
                            <span>{data.ctaLabel}</span>
                            <svg className='downloadArrow w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                            </svg>
                        </a>
                        <div className='grid grid-cols-2 gap-x-6 gap-y-2 justify-items-center md:justify-items-start mt-6 text-sm max-w-xs md:max-w-md mx-auto md:mx-0'>
                            {data.microTrust.map((item) => (
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
                        className='w-64 md:w-72 object-cover'
                        src={screenshotSrc(data.screenshot, theme)}
                        alt='app screenshot'
                    />
                </div>
            </div>
        </section>
    );
}
