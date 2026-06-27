'use client'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useLocale } from '../../i18n/useLocale';
import { ui } from '../../i18n/ui';
import type { Locale } from '../../i18n/locale';

export default function ThemeToggle({ locale: localeProp }: { locale?: Locale } = {}) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const ctxLocale = useLocale();
    const t = ui(localeProp ?? ctxLocale);

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? t.switchToLight : t.switchToDark}
            title={isDark ? t.lightTheme : t.darkTheme}
            className='themeToggle fixed bottom-8 right-8 z-[60] flex items-center justify-center
                w-16 h-16 rounded-full'
        >
            <Sun
                className={`absolute w-7 h-7 transition-all duration-500
                    ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                strokeWidth={2.25}
            />
            <Moon
                className={`absolute w-7 h-7 transition-all duration-500
                    ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
                strokeWidth={2.25}
            />
        </button>
    );
}
