import { css } from 'styled-components';

export const typography = {
  type: {
    primary: "'Open Sans', Georgia, sans-serif",
    secondary: 'arial',
  },
  weight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  size: {
    xxxl: 57,
    xxl: 45,
    xl: 36,
    lg: 32,
    md: 28,
    sm: 24,
    xs: 22,
    xxs: 16,
    xxxs: 14,
    nano: 12,
  },
  height: {
    xxxl: 64,
    xxl: 52,
    xl: 44,
    lg: 40,
    md: 36,
    sm: 32,
    xs: 28,
    xxs: 24,
    xxxs: 20,
    nano: 16,
  },
} as const;

export const typesystem = {
  display: {
    lg: {
      element: 'h1',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxxl,
      lineHeight: 64,
      letterSpacing: -0.25,
    },
    md: {
      element: 'h2',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxl,
      lineHeight: 52,
      letterSpacing: 0,
    },
    sm: {
      element: 'h3',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xl,
      lineHeight: 44,
      letterSpacing: 0,
    },
  },
  headline: {
    lg: {
      element: 'h4',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.lg,
      lineHeight: 40,
      letterSpacing: 0,
    },
    md: {
      element: 'h5',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.md,
      lineHeight: 36,
      letterSpacing: 0,
    },
    sm: {
      element: 'h6',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.sm,
      lineHeight: 32,
      letterSpacing: 0,
    },
  },
  body: {
    lg: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxs,
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    md: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxxs,
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    sm: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.nano,
      lineHeight: 16,
      letterSpacing: 0.4000000059604645,
    },
  },
  label: {
    lg: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.xxxs,
      lineHeight: 20,
      letterSpacing: 0.10000000149011612,
    },
    md: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.nano,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
    sm: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
  },
  title: {
    lg: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xs,
      lineHeight: 28,
      letterSpacing: 0,
    },
    md: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.xxs,
      lineHeight: 24,
      letterSpacing: 0.15000000596046448,
    },
    sm: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.xxxs,
      lineHeight: 20,
      letterSpacing: 0.10000000149011612,
    },
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

export const palette = {
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F4',
    200: '#E6E6E6',
    300: '#D4D4D4',
    400: '#A2A2A2',
    500: '#727272',
    600: '#535353',
    700: '#404040',
    800: '#212121',
    900: '#181818',
  },
  primary: {
    100: '#FF4785',
    200: '#FF5E94',
    300: '#FF75A4',
    400: '#FF8CB3',
    500: '#FFA3C2',
    600: '#FFBAD1',
    700: '#FFD1E1',
    800: '#FFE8F0',
  },
  secondary: {
    100: '#1EA7FD',
    200: '#3ab2fd',
    300: '#56bdfe',
    400: '#72c8fe',
    500: '#8fd3fe',
    600: '#abdefe',
    700: '#c7e9ff',
    800: '#c7e9ff',
  },
  tertiary: {
    100: '#FFAE00',
    200: '#FFB820',
    300: '#FFC240',
    400: '#FFCC60',
    500: '#FFD780',
    600: '#FFE19F',
    700: '#FFEBBF',
    800: '#FFF5DF',
  },
  info: {
    100: '#47E1FF',
    200: '#5ee5ff',
    300: '#75e9ff',
    400: '#8cecff',
    500: '#a3f0ff',
    600: '#baf4ff',
    700: '#d1f8ff',
    800: '#e8fbff',
  },
  success: {
    100: '#66bf3c',
    200: '#79c754',
    300: '#8ccf6d',
    400: '#9fd785',
    500: '#b3df9e',
    600: '#c6e7b6',
    700: '#d9efce',
    800: '#ecf7e7',
  },
  error: {
    100: '#F44336',
    200: '#F55B4F',
    300: '#F77268',
    400: '#F88A81',
    500: '#FAA19B',
    600: '#FBB9B4',
    700: '#FCD0CD',
    800: '#FEE8E6',
  },
};

export const colors = {
  background: '#FFFF',
  white: '#ffffff',
  black: '#000000',
  text: {
    primary: palette.neutral[800],
    secondary: palette.neutral[400],
    disabled: palette.neutral[200],
  },
  coreColors: {
    primary: palette.primary[100],
    secondary: palette.secondary[100],
    tertiary: palette.tertiary[100],
    info: palette.info[100],
    success: palette.success[100],
    error: palette.error[100],
    neutral: palette.neutral[400],
  },
  palette: {
    ...palette,
  },
};

export const theme = {
  typography,
  typesystem,
  spacing,
  border,
  breakpoints,
  keyframes,
} as const;

type CustomTheme = typeof theme & {
  colors: typeof colors;
  scheme: 'light' | 'dark';
};

export const lightTheme: CustomTheme = {
  scheme: 'light',
  colors: { ...colors },
  ...theme,
} as const;

export const darkTheme: CustomTheme = {
  scheme: 'dark',
  colors: {
    ...colors,
    background: palette.neutral[900],
    text: {
      primary: palette.neutral[200],
      secondary: palette.neutral[600],
      disabled: palette.neutral[800],
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
