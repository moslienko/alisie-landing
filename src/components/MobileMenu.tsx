
import { X } from 'lucide-react';
import { getData } from './navbar/Navbar.data'
import { useLocale } from '../i18n/useLocale'
import { ui } from '../i18n/ui'
import { useTheme } from '../hooks/useTheme'

interface MobileMenuProps {
    toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMenu }) => {
    const locale = useLocale()
    const data = getData(locale)
    const t = ui(locale)
    const { theme } = useTheme()
    return (
        <div className='md:hidden fixed inset-0 w-full h-full bg-[rgb(var(--bg-rgb)/0.6)] backdrop-blur-2xl flex flex-col items-center justify-center z-50'>
            <button
                onClick={toggleMenu}
                aria-label={t.closeMenu}
                className='absolute top-5 right-4 text-[rgb(var(--fg-rgb)/0.7)] hover:text-[var(--color-tint-start)] transition-colors'
            >
                <X className='w-10 h-10' />
            </button>

            <nav className='flex items-center justify-center'>
                <ul className='flex flex-col items-center gap-2'>
                    {data.menu.map((item) => (
                        <li key={item.title}>
                            <a
                                href={item.link}
                                onClick={toggleMenu}
                                className='block px-8 py-3 rounded-2xl font-sora font-semibold text-4xl
                                    text-[rgb(var(--fg-rgb)/0.8)] hover:text-[var(--color-tint-start)] hover:bg-[rgb(var(--tint-start-rgb)/0.08)]
                                    transition-colors duration-200'
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {data.links.appStore && (
                <a
                    href={data.links.appStore}
                    target='_blank'
                    onClick={toggleMenu}
                    className='mt-10'
                >
                    <img
                        className='h-12 object-contain'
                        src={`/app_store_${theme}_${locale}.svg`}
                        alt={t.appStoreAlt}
                    />
                </a>
            )}
        </div>
    );
};
