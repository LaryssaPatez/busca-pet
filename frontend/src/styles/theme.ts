import { DefaultTheme } from "styled-components";

export const breakpoints = {
    mobile: '576px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
};

export const theme:DefaultTheme = {
    colors: {
        primary: '#7821ce',
        secondary: '#ff5f11',
        background: '#f9f9f9',
        textDark: '#000000',
        textLight: '#ffffff',
    },
    breakpoints,
    spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
    },
};
