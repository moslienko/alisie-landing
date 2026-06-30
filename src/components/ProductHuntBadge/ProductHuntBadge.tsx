const POST_URL =
    'https://www.producthunt.com/products/alisie-dream-diary?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-alisie-dream-diary'

const BADGE_SRC =
    'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1182782&theme=dark'

const ALT =
    'Alisie - Dream Diary - A private dream journal for iPhone and iPad | Product Hunt'

export default function ProductHuntBadge({ className = '' }: { className?: string }) {
    return (
        <a
            href={POST_URL}
            target='_blank'
            rel='noopener noreferrer'
            className={className}
        >
            <img src={BADGE_SRC} alt={ALT} width={250} height={54} />
        </a>
    )
}
