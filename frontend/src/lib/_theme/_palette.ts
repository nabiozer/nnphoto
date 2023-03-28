import { Color, PaletteColor, PaletteColorOptions, PaletteOptions } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';
//new palette type
declare module '@mui/material/styles' {
    interface Palette {
        dark: Color;
        green: PaletteColor;
    }
    interface PaletteOptions {
        dark?: ColorPartial;
        green?: PaletteColorOptions;
    }
    interface PaletteColor extends Omit<ColorPartial, 'A100' | 'A200' | 'A400' | 'A700'> {}
}
interface CustomPaletteColorOptions extends Omit<PaletteColor, 'contrastText'> {}
interface CustomPaletteOptions extends PaletteOptions {
    primary: CustomPaletteColorOptions;
    secondary: CustomPaletteColorOptions;
    info: CustomPaletteColorOptions;
    error: CustomPaletteColorOptions;
    success: CustomPaletteColorOptions;
    warning: CustomPaletteColorOptions;
    grey: Omit<CustomPaletteColorOptions, 'light' | 'main' | 'dark'>;
    green: Pick<CustomPaletteColorOptions, 'light' | 'main' | 'dark'>;
    dark: Pick<CustomPaletteColorOptions, 50 | 100>;
}
export const palette: CustomPaletteOptions = {
    primary: {
        light: '#6f7276',
        main: '#4b4f54',
        dark: '#292d31',
        '50': '#f8fdff',
        '100': '#f3f8fe',
        '200': '#eef3f9',
        '300': '#e8edf3',
        '400': '#c7cbd1',
        '500': '#a9aeb4',
        '600': '#7f8489',
        '700': '#6b6f74',
        '800': '#4b4f54',
        '900': '#292d31',
    },
    secondary: {
        main: '#116466',
        dark: '#015b2a',
        light: '#1b8b48',
        '50': '#e6f5eb',
        '100': '#c2e5cd',
        '200': '#9bd4ad',
        '300': '#72c58d',
        '400': '#51b875',
        '500': '#51b875',
        '600': '#259d54',
        '700': '#1b8b48',
        '800': '#127a3d',
        '900': '#015b2a',
    },
    info: {
        main: '#0b74ec',
        dark: '#1941ba',
        light: '#2ba5ff',
        '50': '#e2f2ff',
        '100': '#badeff',
        '200': '#8ccbff',
        '300': '#59b6ff',
        '400': '#2ba5ff',
        '500': '#0095ff',
        '600': '#0087ff',
        '700': '#0b74ec',
        '800': '#1362da',
        '900': '#1941ba',
    },
    error: {
        main: '#f44336',
        dark: '#AA2E25',
        light: '#F6685E',
        '50': '#ffebee',
        '100': '#ffcdd2',
        '200': '#ef9a9a',
        '300': '#e57373',
        '400': '#F6685E',
        '500': '#f44336',
        '600': '#e53935',
        '700': '#d32f2f',
        '800': '#ba362f',
        '900': '#AA2E25',
    },
    success: {
        main: '#127a3d',
        dark: '#015b2a',
        light: '#1b8b48',
        '50': '#e6f5eb',
        '100': '#c2e5cd',
        '200': '#9bd4ad',
        '300': '#72c58d',
        '400': '#51b875',
        '500': '#51b875',
        '600': '#259d54',
        '700': '#1b8b48',
        '800': '#127a3d',
        '900': '#015b2a',
    },
    warning: {
        main: '#f57d00',
        dark: '#e65200',
        light: '#ffa826',
        '50': '#fff3e0',
        '100': '#ffe0b2',
        '200': '#ffcd80',
        '300': '#ffb84d',
        '400': '#ffa826',
        '500': '#ff9900',
        '600': '#fb8d00',
        '700': '#f57d00',
        '800': '#ef6d00',
        '900': '#e65200',
    },
    grey: {
        '50': '#f0f2f5',
        '100': '#dae2de',
        '200': '#bbc5d2',
        '300': '#a7b5c3',
        '400': '#a5a7aa',
        '500': '#9da7b3',
        '600': '#747d89',
        '700': '#606974',
        '800': '#414954',
        '900': '#1f2831',
    },
    green: {
        main: '#7db900',
        dark: '#599600',
        light: '#c3da0d',
    },
    dark: {
        '50': '#00000080',
        '100': '#000000b3',
    },
    common: {
        white: '#fff',
        black: '#000',
    },
};