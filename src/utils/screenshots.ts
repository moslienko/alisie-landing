import type { Theme } from '../hooks/useTheme';

export function screenshotSrc(file: string, theme: Theme): string {
    return `/screenshots/${theme}/${file}`;
}
