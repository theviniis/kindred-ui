import { keyframes as _keyframes } from 'styled-components';

export const typography = {
  type: {
    primary: `Lato, "Helvetica Neue", Helvetica, sans-serif`,
    secondary: 'arial',
  },
  weight: {
    regular: '400',
    medium: '500',
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
  primary: {
    100: '#03a9f4',
    200: '#e1f5fe',
    300: '#b3e5fc',
    400: '#4fc3f7',
    500: '#0288d1',
    600: '#0277bd',
  },
  secondary: {
    100: '#673ab7',
    200: '#ede7f6',
    300: '#d1c4e9',
    400: '#9575cd',
    500: '#512da8',
    600: '#311b92',
  },
  success: {
    100: '#8bc34a',
    200: '#e7f6d5',
    300: '#c5e1a5',
    400: '#aed581',
    500: '#689f38',
    600: '#558b2f',
  },
  error: {
    100: '#f44336',
    200: '#ffdde0',
    300: '#ffcdd2',
    400: '#ef9a9a',
    500: '#d32f2f',
    600: '#b71c1c',
  },
  neutral: {
    100: '#f2f2f2',
    200: '#e8e9e9',
    300: '#d1d3d4',
    400: '#babdbf',
    500: '#808488',
    600: '#666a6d',
    700: '#4d5052',
    800: '#212122',
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
} as const;

export const spacing = {
  nano: 4,
  xsmall: 8,
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 40,
} as const;

export const border = {
  radius: {
    xsmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    pill: 500,
    circular: '50%',
  },
  width: {
    xsmall: 1,
    small: 2,
    medium: 4,
    large: 8,
  },
} as const;

export const breakpoints = {
  xsmall: {
    columns: 4,
  },
  small: {
    width: 600,
    columns: 8,
  },
  medium: {
    width: 1024,
    columns: 12,
  },
  large: {
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

export const theme = {
  typography,
  colors,
  spacing,
  border,
  breakpoints,
  keyframes,
} as const;

type CustomTheme = typeof theme &
  Record<
    'colorBg' | 'colorFg',
    typeof colors.neutral[100] | typeof colors.neutral[800]
  >;

export const lightTheme: CustomTheme = {
  colorBg: colors.neutral[100],
  colorFg: colors.neutral[800],
  ...theme,
} as const;

export const darkTheme: CustomTheme = {
  colorBg: colors.neutral[800],
  colorFg: colors.neutral[100],
  ...theme,
} as const;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
