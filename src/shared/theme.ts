import { keyframes as _keyframes } from 'styled-components';

export const typography = {
  type: {
    primary: `Lato, "Helvetica Neue", Helvetica, sans-serif`,
    secondary: 'arial',
  },
  weight: {
    regular: '400',
    md: '500',
    semiBold: '600',
    bold: '700',
  },
  size: {
    paragraph: {
      xxxs: '12px',
      xxs: '14px',
      xs: '16px',
      sm: '20px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
    },
    lineHeight: {
      default: 1,
      xs: 1.15,
      sm: 1.2,
      md: 1.33,
      lg: 1.5,
      xl: 1.7,
      xxl: 2,
    },
  },
} as const;

export const colors = {
  neutral: {
    white: '#FFF',
    black: '#000',
    50: '#fafafa',
    100: '#f4f4f4',
    200: '#e6e6e6',
    300: '#d4d4d4',
    400: '#a2a2a2',
    500: '#727272',
    600: '#535353',
    700: '#404040',
    800: '#272727',
    900: '#181818',
  },
  primary: {
    DEFAULT: '#03a9f4',
    50: '#f0f9ff',
    100: '#e2f3ff',
    200: '#bfe8ff',
    300: '#85d6ff',
    400: '#3fc0ff',
    500: '#03a9f4',
    600: '#0486ce',
    700: '#086aa5',
    800: '#0c5987',
    900: '#104a6f',
  },
  secondary: {
    DEFAULT: '#673ab7',
    50: '#f8f6ff',
    100: '#f2edff',
    200: '#e8dfff',
    300: '#d4c3ff',
    400: '#b899ff',
    500: '#9e70ff',
    600: '#8a4ffb',
    700: '#7740de',
    800: '#673ab7',
    900: '#4e228e',
  },
  success: {
    DEFAULT: '#8bc34a',
    50: '#f7fee7',
    100: '#ebfacc',
    200: '#d9f5a2',
    300: '#bfec75',
    400: '#a7de59',
    500: '#8bc34a',
    600: '#6a9d32',
    700: '#507921',
    800: '#406118',
    900: '#365313',
  },
  error: {
    DEFAULT: '#f44336',
    50: '#fef2f1',
    100: '#ffe3e1',
    200: '#ffcbc9',
    300: '#ffa6a1',
    400: '#fc7269',
    500: '#f44336',
    600: '#df250d',
    700: '#bb1c06',
    800: '#9a1c0f',
    900: '#7f1e16',
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
  xxsm: 4,
  xsm: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xlg: 40,
  xxlg: 48,
} as const;

export const border = {
  radius: {
    xsm: 4,
    sm: 8,
    md: 16,
    lg: 24,
    pill: 500,
    circular: '50%',
  },
  width: {
    xsm: 1,
    sm: 2,
    md: 4,
    lg: 8,
  },
} as const;

export const breakpoints = {
  xsm: {
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

const fadeIn = _keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const keyframes = {
  fadeIn,
} as const;

// Theme config
export const theme = {
  typography,
  spacing,
  border,
  breakpoints,
  keyframes,
} as const;

type CustomTheme = typeof theme & {
  colors: Record<'background' | 'foreground', '#fff' | '#000'> & typeof colors;
};

export const lightTheme: CustomTheme = {
  colors: {
    ...colors,
    background: '#fff',
    foreground: '#000',
  },
  ...theme,
} as const;

export const darkTheme: CustomTheme = {
  colors: {
    ...colors,
    background: '#000',
    foreground: '#fff',
    neutral: {
      white: '#FFF',
      black: '#000',
      50: '#181818',
      100: '#272727',
      200: '#404040',
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
} as const;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
