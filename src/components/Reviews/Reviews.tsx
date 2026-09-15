'use client'
import { getData } from './Reviews.data'
import { useLocale } from '../../i18n/useLocale'

const Stars = ({ count }: { count: number }) => (
    <div className='flex gap-0.5' aria-label={`${count} / 5`}>
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                <path d='M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.3 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9L12 2z' />
            </svg>
        ))}
    </div>
)

export default function Reviews() {
    const locale = useLocale()
    const data = getData(locale)

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
            year: 'numeric',
            month: 'long',
        })

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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                {data.reviews.map((review) => (
                    <figure
                        key={review.id}
                        className='reviewCard relative p-6 rounded-3xl border-2 overflow-hidden flex flex-col'
                    >
                        <div className='reviewTint absolute inset-0 rounded-3xl pointer-events-none'></div>
                        <div className='relative z-10 flex flex-col h-full'>
                            <span className='text-[var(--color-tint-end)]'>
                                <Stars count={review.rating} />
                            </span>
                            <blockquote className='text-base text-color opacity-80 mt-4 leading-relaxed flex-1'>
                                {review.text}
                            </blockquote>
                            <figcaption className='text-sm text-color opacity-55 mt-5'>
                                {review.author} · {review.country} · {formatDate(review.date)}
                            </figcaption>
                        </div>
                    </figure>
                ))}
            </div>
        </section>
    );
}
