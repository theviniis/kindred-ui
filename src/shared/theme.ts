import { keyframes } from 'styled-components';

export const typography = {
  type: { primary: `'Poppins, sans-serif'`, secondary: 'arial' },
  weight: {
    regular: '400',
    medium: '600',
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
    100: { color: '#03a9f4', fontColor: '#f2f2f2' },
    200: { color: '#e1f5fe', fontColor: '#212122' },
    300: { color: '#b3e5fc', fontColor: '#212122' },
    400: { color: '#4fc3f7', fontColor: '#212122' },
    500: { color: '#0288d1', fontColor: '#f2f2f2' },
    600: { color: '#0277bd', fontColor: '#f2f2f2' },
  },
  secondary: {
    100: { color: '#673ab7', fontColor: '#f2f2f2' },
    200: { color: '#ede7f6', fontColor: '#212122' },
    300: { color: '#d1c4e9', fontColor: '#212122' },
    400: { color: '#9575cd', fontColor: '#212122' },
    500: { color: '#512da8', fontColor: '#f2f2f2' },
    600: { color: '#311b92', fontColor: '#f2f2f2' },
  },
  success: {
    100: { color: '#8bc34a', fontColor: '#f2f2f2' },
    200: { color: '#e7f6d5', fontColor: '#212122' },
    300: { color: '#c5e1a5', fontColor: '#212122' },
    400: { color: '#aed581', fontColor: '#212122' },
    500: { color: '#689f38', fontColor: '#f2f2f2' },
    600: { color: '#558b2f', fontColor: '#f2f2f2' },
  },
  // warning: {
  //   100: { color: '#673ab7', fontColor: '#f2f2f2' },
  //   200: { color: '#ede7f6', fontColor: '#212122' },
  //   300: { color: '#d1c4e9', fontColor: '#212122' },
  //   400: { color: '#9575cd', fontColor: '#212122' },
  //   500: { color: '#512da8', fontColor: '#212122' },
  //   600: { color: '#311b92', fontColor: '#212122' },
  // },
  error: {
    100: { color: '#f44336', fontColor: '#f2f2f2' },
    200: { color: '#ffdde0', fontColor: '#212122' },
    300: { color: '#ffcdd2', fontColor: '#212122' },
    400: { color: '#ef9a9a', fontColor: '#212122' },
    500: { color: '#d32f2f', fontColor: '#f2f2f2' },
    600: { color: '#b71c1c', fontColor: '#f2f2f2' },
  },
  neutral: {
    100: { color: '#f2f2f2', fontColor: '#212122' },
    200: { color: '#e8e9e9', fontColor: '#212122' },
    300: { color: '#d1d3d4', fontColor: '#212122' },
    400: { color: '#babdbf', fontColor: '#212122' },
    500: { color: '#808488', fontColor: '#f2f2f2' },
    600: { color: '#666a6d', fontColor: '#f2f2f2' },
    700: { color: '#4d5052', fontColor: '#f2f2f2' },
    800: { color: '#212122', fontColor: '#f2f2f2' },
  },
} as const;

export const gradient = {
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

export const lightTheme = {
  name: 'light',
  bodyColor: colors.neutral[100].color,
  fontColor: colors.neutral[100].fontColor,
} as const;

export const darkTheme = {
  name: 'dark',
  bodyColor: colors.neutral[800].color,
  fontColor: colors.neutral[800].fontColor,
} as const;

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const KEYFRAMES = {
  fadeIn,
} as const;
