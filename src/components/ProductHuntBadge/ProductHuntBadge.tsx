'use client'
import { useTheme } from '../../hooks/useTheme'

const POST_URL =
    'https://www.producthunt.com/products/alisie-dream-diary?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-alisie-dream-diary'

const badgeSrc = (theme: 'dark' | 'light') =>
    `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1182782&theme=${theme}`

const ALT =
    'Alisie - Dream Diary - A private dream journal for iPhone and iPad | Product Hunt'

export default function ProductHuntBadge({ className = '' }: { className?: string }) {
    const { theme } = useTheme()
    return (
        <a
            href={POST_URL}
            target='_blank'
            rel='noopener noreferrer'
            className={className}
        >
            <img
                src={badgeSrc(theme)}
                alt={ALT}
                width={250}
                height={54}
                loading='lazy'
            />
        </a>
    )
}
