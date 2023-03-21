import { css } from 'styled-components';

export const typography = {
  type: {
    primary: `'Open Sans', sans-serif;`,
    secondary: 'arial',
  },
  size: {
    display1: { fontSize: 57, lineHeight: 64, fontWeight: 400 },
    display2: { fontSize: 45, lineHeight: 52, fontWeight: 400 },
    display3: { fontSize: 36, lineHeight: 44, fontWeight: 400 },
    headline1: { fontSize: 32, lineHeight: 40, fontWeight: 400 },
    headline2: { fontSize: 28, lineHeight: 36, fontWeight: 400 },
    headline3: { fontSize: 24, lineHeight: 32, fontWeight: 400 },
    title1: { fontSize: 22, lineHeight: 28, fontWeight: 400 },
    title2: { fontSize: 16, lineHeight: 24, fontWeight: 500 },
    title3: { fontSize: 14, lineHeight: 20, fontWeight: 500 },
    label1: { fontSize: 14, lineHeight: 20, fontWeight: 500 },
    label2: { fontSize: 12, lineHeight: 16, fontWeight: 500 },
    label3: { fontSize: 11, lineHeight: 16, fontWeight: 500 },
    body1: { fontSize: 16, lineHeight: 24, fontWeight: 400 },
    body2: { fontSize: 14, lineHeight: 20, fontWeight: 400 },
    body3: { fontSize: 12, lineHeight: 16, fontWeight: 500 },
  },
} as const;

export const colors = {
  white: '#FFF',
  black: '#000',
  neutral: {
    100: '#f4f4f4',
    200: '#e6e6e6',
    300: '#d4d4d4',
    400: '#a2a2a2',
    500: '#727272',
    600: '#535353',
    700: '#333333',
    800: '#202020',
    900: '#181818',
  },
  primary: {
    100: '#104a6f',
    200: '#086aa5',
    300: '#0486ce',
    400: '#3fc0ff',
    500: '#bfe8ff',
  },
  secondary: {
    100: '#4e228e',
    200: '#7740de',
    300: '#8a4ffb',
    400: '#9e70ff',
    500: '#b899ff',
  },
  success: {
    100: '#507921',
    200: '#6a9d32',
    300: '#8bc34a',
    400: '#a7de59',
    500: '#bfec75',
  },
  error: {
    100: '#9a1c0f',
    200: '#bb1c06',
    300: '#df250d',
    400: '#f44336',
    500: '#fc7269',
  },
  gradients: {
    info: `
      background: #2328EB;
      background: linear-gradient(225deg, #2328EB 0%, #23CCEB 100%);
    `,
    highlight: `
      background: #E0157A;
      background: linear-gradient(225deg, #E0157A 0%, #FEDB4D 100%);
    `,
    secondary: `
      background: #7116E9;
      background: linear-gradient(225deg, #7116E9 0%, #E0157A 100%);
    `,
    communication: `
      background: #23CCEB;
      background: linear-gradient(225deg, #23CCEB 0%, #FEDB4D 100%);
    `,
  },
};

export const spacing = {
  xxxs: 4,
  xxs: 8,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
  xlg: 48,
  xxlg: 56,
  xxxlg: 64,
} as const;

export const border = {
  radius: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    pill: 500,
    circular: '50%',
  },
  width: {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 8,
  },
} as const;

export const breakpoints = {
  xs: {
    columns: 4,
  },
  sm: {
    width: 600,
    columns: 8,
  },
  md: {
    width: 1024,
    columns: 12,
  },
  lg: {
    width: 1440,
    columns: 12,
  },
} as const;

export const keyframes = {
  fadeIn: () => css`
    transition: ease-in 150ms;
    animation: fadeIn 150ms forwards;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  fadeUp: () => css`
    transition: ease-in 150ms;
    animation: fadeUp 150ms forwards;
    @keyframes fadeUp {
      from {
        transform: translateX(16px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,
};

// Theme config
export const theme = {
  typography,
  spacing,
  border,
  breakpoints,
  keyframes,
} as const;

type CustomTheme = typeof theme & {
  colors: Record<'background' | 'foreground', string> & typeof colors;
};

export const lightTheme: CustomTheme = {
  colors: {
    ...colors,
    background: '#fff',
    foreground: '#333',
  },
  ...theme,
} as const;

export const darkTheme: CustomTheme = {
  colors: {
    ...colors,
    background: '#181818',
    foreground: '#e6e6e6',
    neutral: {
      100: '#272727',
      200: '#333333',
      300: '#535353',
      400: '#727272',
      500: '#a2a2a2',
      600: '#d4d4d4',
      700: '#e6e6e6',
      800: '#f4f4f4',
      900: '#fafafa',
    },
  },
  ...theme,
};

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
