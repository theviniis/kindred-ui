import { css } from 'styled-components';

export const typography = {
  display1: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
  },
  display2: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  },
  display3: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  },
  headline1: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  headline2: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
  },
  headline3: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  body1: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  body3: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4000000059604645,
  },
  label1: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Medium',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.10000000149011612,
  },
  label2: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Medium',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  label3: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Medium',
    fontWeight: 500,
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  title1: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Regular',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
  title2: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Medium',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15000000596046448,
  },
  title3: {
    fontFamily: "'Open Sans', sans-serif",
    fontFamilyStyle: 'Medium',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.10000000149011612,
  },
} as const;

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

export const colors = {
  foreground: '#333333',
  background: '#ffffff',
  white: '#ffffff',
  black: '#000000',
  neutral: {
    100: '#000000',
    200: '#191c1d',
    300: '#393c3d',
    400: '#505354',
    500: '#747878',
    600: '#a9acac',
    700: '#e1e3e3',
    800: '#f8fafa',
    900: '#ffffff',
  },
  primary: {
    100: '#ff4785',
    200: '#ff5e94 ',
    300: '#ff75a4 ',
    400: '#ff8cb3',
    500: '#ffa3c2',
    600: '#ffbad1',
    700: '#ffd1e1',
    800: '#ffe8f0 ',
  },
  secondary: {
    100: '#245DFF',
    200: '#3f71ff',
    300: '#5b86ff',
    400: '#769aff',
    500: '#92aeff',
    600: '#adc2ff',
    700: '#c8d7ff',
    800: '#e4ebff',
  },
  tertiary: {
    100: '#ffae00',
    200: '#ffb820',
    300: '#ffc240',
    400: '#ffcc60',
    500: '#ffd780',
    600: '#ffe19f',
    700: '#ffebbf',
    800: '#fff5df',
  },
  info: {
    100: '#47e1ff',
    200: '#5ee5ff',
    300: '#75e9ff',
    400: '#8cecff',
    500: '#a3f0ff',
    600: '#baf4ff',
    700: '#d1f8ff',
    800: '#e8fbff',
  },
  success: {
    100: '#47ff65',
    200: '#5eff78',
    300: '#75ff8c',
    400: '#8cff9f',
    500: '#a3ffb2',
    600: '#baffc5',
    700: '#d1ffd9',
    800: '#e8ffec',
  },
  error: {
    100: '#f44336',
    200: '#f55b4f',
    300: '#f77268',
    400: '#f88a81',
    500: '#faa19b',
    600: '#fbb9b4',
    700: '#fcd0cd',
    800: '#fee8e6',
  },
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
  colors: typeof colors;
};

export const lightTheme: CustomTheme = {
  colors: { ...colors },
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

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
