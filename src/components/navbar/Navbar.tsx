'use client'

import { useState, useEffect } from 'react';
import { MobileMenu } from '../MobileMenu';
import { Menu as MenuIcon, X } from 'lucide-react';
import Logo from '../logo/Logo';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import { getData } from './Navbar.data';
import { useLocale } from '../../i18n/useLocale';
import { ui } from '../../i18n/ui';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
    const locale = useLocale();
    const data = getData(locale);
    const t = ui(locale);
    const { theme } = useTheme();
    const appStoreBadge = `/app_store_${theme}_${locale}.svg`;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='text-color'>
            <nav className='flex justify-between items-center py-5'>
                <div className='flex justify-center items-center'>
                    <Logo size="big" />
                </div>
                <div className='hidden md:flex items-center'>
                    <div className='hidden md:flex space-x-4 mr-5'>
                        {data.menu.map((item) => (
                            <a
                                key={item.title}
                                href={item.link}
                                className='font-normal text-sl ml-4 mr-4 text-[rgb(var(--fg-rgb)/0.7)] hover:text-[var(--color-tint-start)] transition-colors duration-200'
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <a href={data.links.appStore} target='_blank' className='mr-4'>
                        <img
                            className='h-10 object-contain'
                            src={appStoreBadge}
                            alt={t.appStoreAlt}
                        />
                    </a>
                    <LangSwitcher />
                </div>
                <button
                    onClick={toggleMenu}
                    aria-label={isOpen ? t.closeMenu : t.openMenu}
                    className='md:hidden text-[rgb(var(--fg-rgb)/0.7)] hover:text-[var(--color-tint-start)] transition-colors duration-200'
                >
                    {isOpen ? <X /> : <MenuIcon />}
                </button>
            </nav>
            {isOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </header>
    );
}
