import React from 'react';
import { data } from './Logo.data'
import { useLocale } from '../../i18n/useLocale'
import { localizedPath } from '../../i18n/locale'

interface LogoProps {
    size: 'big' | 'small';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
    const sizeClasses = {
        big: 'text-xl',
        small: 'text-xs',
    };

    const iconSizeClasses = {
        big: 'w-8',
        small: 'w-6',
    };

    const homeHref = localizedPath('/', useLocale());

    return (
        <a href={homeHref} className={`font-semibold flex mr-4 ${sizeClasses[size]}`}>
            <img
                className={`${iconSizeClasses[size]} aspect-square object-cover mr-2 rounded-[22%]`}
                src={data.icon}
                alt='Alisie logo'
                decoding='async'
            />
            {data.name}
        </a>
    );
};

export default Logo;
