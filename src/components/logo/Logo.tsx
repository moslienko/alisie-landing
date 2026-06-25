import React from 'react';
import { data } from './Logo.data'

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

    return (
        <a href='#' className={`font-semibold flex mr-4 ${sizeClasses[size]}`}>
            <img
                className={`${iconSizeClasses[size]} aspect-square object-cover mr-2 rounded-[22%]`}
                src={data.icon}
                alt='app icon'
            />
            {data.name}
        </a>
    );
};

export default Logo;
