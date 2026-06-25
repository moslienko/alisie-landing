'use client'
import { clsx } from 'clsx';
import { Cloud, ArrowUpDown, Bell, Sun, Moon, Copy, Target, AppWindow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getData } from './Features.data'
import type { FeatureItem, ColumnEntry } from './Features.data'
import { useTheme } from '../../hooks/useTheme'
import { useLocale } from '../../i18n/useLocale'
import { screenshotSrc } from '../../utils/screenshots'
import type { Theme } from '../../hooks/useTheme'

const ICONS: Record<string, LucideIcon> = {
    Cloud,
    ArrowUpDown,
    Bell,
    Copy,
    Target,
    AppWindow,
};

function DefaultCard({ item, theme }: { item: FeatureItem; theme: Theme }) {
    const copy = (
        <div>
            <h1 className='font-sora font-semibold text-fg text-[24px] leading-tight'>{item.name}</h1>
            <p className='font-sora font-semibold text-[rgb(var(--fg-rgb)/0.66)] text-[16px] leading-snug mt-2'>{item.subtitle}</p>
        </div>
    );

    if (item.crop) {
        const phoneOnTop = item.crop === 'top';
        const phone = (
            <div className={clsx(
                'relative -mx-8 h-80 overflow-hidden flex justify-center',
                phoneOnTop ? 'mt-2 -mb-8' : 'mb-4 -mt-10',
            )}>
                <img
                    className={clsx(
                        'featureImage w-80 max-w-none object-cover',
                        phoneOnTop ? 'object-top' : 'object-bottom',
                    )}
                    src={item.image ? screenshotSrc(item.image, theme) : undefined}
                    alt={item.name}
                />
            </div>
        );
        return (
            <div className='featureCard relative px-8 py-8 overflow-hidden h-full flex flex-col'>
                <div className='featureTint absolute inset-0 tintBackground opacity-0 blur-2xl pointer-events-none'></div>
                <div className='featureContent relative z-10 flex flex-col h-full'>
                    {phoneOnTop ? (
                        <>
                            {copy}
                            <div className='mt-auto'>{phone}</div>
                        </>
                    ) : (
                        <>
                            <div className='mt-auto'>{phone}</div>
                            {copy}
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className='featureCard relative p-8 overflow-hidden h-full flex flex-col'>
            <div className='featureTint absolute inset-0 tintBackground opacity-0 blur-2xl pointer-events-none'></div>
            <div className='featureContent relative z-10 flex flex-col h-full'>
                <div className='flex-1 flex items-center justify-center min-h-0 py-4'>
                    <img
                        className='featureImage max-h-[280px] w-auto object-contain'
                        src={item.image ? screenshotSrc(item.image, theme) : undefined}
                        alt='screenshot'
                    />
                </div>
                {copy}
            </div>
        </div>
    );
}

function MiniCard({ item, index }: { item: FeatureItem; index: number }) {
    const Icon = item.icon ? ICONS[item.icon] : undefined;
    const [from, to] = item.gradient ?? ['var(--color-tint-start)', 'var(--color-tint-end)'];
    const gradientId = `miniIconGradient-${item.icon ?? 'x'}-${index}`;
    const textGradient = { backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` };

    return (
        <div className='featureCard relative px-6 py-5 overflow-hidden flex-1'>
            <div className='featureTint absolute inset-0 tintBackground opacity-0 blur-2xl pointer-events-none'></div>
            <div className='featureContent relative z-10 flex items-center gap-4 h-full'>
                {Icon && (
                    <span className='flex-shrink-0 flex items-center justify-center w-12 h-12'>
                        <svg width='0' height='0' className='absolute'>
                            <defs>
                                <linearGradient id={gradientId} x1='0' y1='0' x2='1' y2='1'>
                                    <stop offset='0%' stopColor={from} />
                                    <stop offset='100%' stopColor={to} />
                                </linearGradient>
                            </defs>
                        </svg>
                        <Icon className='w-7 h-7' strokeWidth={2.25} stroke={`url(#${gradientId})`} />
                    </span>
                )}
                <div className='min-w-0'>
                    <h1
                        className='font-sora font-semibold text-[20px] leading-tight bg-clip-text text-transparent'
                        style={textGradient}
                    >
                        {item.name}
                    </h1>
                    {item.subtitle && (
                        <p className='font-sora font-semibold text-[rgb(var(--fg-rgb)/0.66)] text-[14px] leading-snug mt-1'>{item.subtitle}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

function LargeCard({ item, theme }: { item: FeatureItem; theme: Theme }) {
    const visuals = (item.images ?? (item.image ? [item.image] : [])).filter(Boolean) as string[];
    return (
        <div className='featureCard relative overflow-hidden'>
            <div className='featureTint absolute inset-0 tintBackground opacity-0 blur-2xl pointer-events-none'></div>
            <div className='featureContent relative z-10 grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='p-10 md:p-12 lg:p-14 text-center md:text-left'>
                    <h1 className='font-sora font-semibold text-fg text-[44px] leading-[1.05]'>{item.name}</h1>
                    <p className='font-sora font-semibold text-[rgb(var(--fg-rgb)/0.66)] text-[24px] leading-snug mt-4'>{item.subtitle}</p>
                </div>
                <div className='relative h-full flex items-end justify-center md:justify-end gap-3 md:translate-y-4 overflow-hidden'>
                    {visuals.map((src, i) => (
                        <img
                            key={i}
                            className='featureImage w-1/3 max-w-[220px] object-contain object-bottom'
                            src={screenshotSrc(src, theme)}
                            alt={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SplitCard({ item }: { item: FeatureItem }) {
    const file = item.splitImage ?? '';
    return (
        <div className='featureCard relative p-8 overflow-hidden h-full flex flex-col'>
            <div className='featureTint absolute inset-0 tintBackground opacity-0 blur-2xl pointer-events-none'></div>
            <div className='featureContent relative z-10 flex flex-col h-full'>
                <div className='flex-1 flex items-center justify-center min-h-0 py-4'>
                    <div className='splitPhone relative w-auto max-h-[280px]'>
                        <img
                            className='featureImage max-h-[280px] w-auto object-contain'
                            src={screenshotSrc(file, 'light')}
                            alt={`${item.name} - light`}
                        />
                        <img
                            className='splitPhoneDark featureImage absolute inset-0 w-full h-full object-contain'
                            src={screenshotSrc(file, 'dark')}
                            alt={`${item.name} - dark`}
                            aria-hidden='true'
                        />
                        <span className='splitDivider' aria-hidden='true' />
                    </div>
                </div>
                <div>
                    <span className='splitBadge inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-sora font-semibold'>
                        <Sun className='w-3.5 h-3.5' strokeWidth={2.5} />
                        <span>/</span>
                        <Moon className='w-3.5 h-3.5' strokeWidth={2.5} />
                    </span>
                    <h1 className='font-sora font-semibold text-fg text-[24px] leading-tight'>{item.name}</h1>
                    <p className='font-sora font-semibold text-[rgb(var(--fg-rgb)/0.66)] text-[16px] leading-snug mt-2'>{item.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

function Column({ entry, theme }: { entry: ColumnEntry; theme: Theme }) {
    if ('stack' in entry) {
        return (
            <div className='flex flex-col gap-5 h-full'>
                {entry.stack.map((mini, i) => (
                    <MiniCard key={i} item={mini} index={i} />
                ))}
            </div>
        );
    }
    if (entry.variant === 'split') {
        return <SplitCard item={entry} />;
    }
    return <DefaultCard item={entry} theme={theme} />;
}

export default function Features() {
    const { theme } = useTheme();
    const data = getData(useLocale());
    return (
        <section id='features' className='flex flex-col py-16 scroll-mt-24'>
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

            <div className='flex flex-col gap-5'>
                {data.rows.map((row, rowIndex) => {
                    const only = row.items.length === 1 ? row.items[0] : undefined;
                    if (only && !('stack' in only) && only.variant === 'large') {
                        return <LargeCard key={rowIndex} item={only} theme={theme} />;
                    }

                    return (
                        <div
                            key={rowIndex}
                            className={clsx(
                                'grid grid-cols-1 gap-5',
                                row.items.length === 2 && 'md:grid-cols-2',
                                row.items.length === 3 && 'md:grid-cols-3',
                                row.items.length >= 4 && 'md:grid-cols-4',
                            )}
                        >
                            {row.items.map((entry, i) => (
                                <Column key={i} entry={entry} theme={theme} />
                            ))}
                        </div>
                    );
                })}
            </div>

            <div className='andMore relative mt-16 flex items-center justify-center gap-6'>
                <span className='andMoreLine hidden sm:block' />
                <h2 className="andMoreText font-playfair text-4xl md:text-5xl
                    bg-gradient-to-r from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                    bg-clip-text text-transparent py-2 whitespace-nowrap">
                    {data.andMore}
                    <span className='andMoreDots'>
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </h2>
                <span className='andMoreLine andMoreLineRight hidden sm:block' />
            </div>
        </section>
    );
}
