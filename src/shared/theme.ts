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

export const colors = {
  white: '#ffffff',
  black: '#000000',
  background: '#ffffff',
  text: '#181818',
  text_muted: '#D4D4D4',
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F4',
    200: '#E6E6E6',
    300: '#D4D4D4',
    400: '#A2A2A2',
    500: '#727272',
    600: '#535353',
    700: '#404040',
    800: '#272727',
    900: '#181818',
  },
  primary: {
    DEFAULT: '#FF4785',
    100: '#FFE8EE',
    200: '#FFAEC6',
    300: '#FF4785',
    400: '#E8236D',
    500: '#9E1550',
  },
  secondary: {
    DEFAULT: '#245DFF',
    100: '#DCEAFF',
    200: '#63A6FF',
    300: '#245DFF',
    400: '#2148E5',
    500: '#21398A',
  },
  tertiary: {
    DEFAULT: '#FFAE00',
    100: '#FFF7DE',
    200: '#FFDF95',
    300: '#FFAE00',
    400: '#AA5E1C',
    500: '#743C1E',
  },
  info: {
    DEFAULT: '#47E1FF',
    100: '#CBF7FF',
    200: '#9AEEFF',
    300: '#47E1FF',
    400: '#00B0D8',
    500: '#117194',
  },
  success: {
    DEFAULT: '#47FF65',
    100: '#E8FFE1',
    200: '#A4FFA1',
    300: '#47FF65',
    400: '#00B048',
    500: '#1B682D',
  },
  error: {
    DEFAULT: '#F44336',
    100: '#FFE3E1',
    200: '#FFA6A1',
    300: '#F44336',
    400: '#DF250D',
    500: '#9A1C0F',
  },
};

// Theme config
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
    white: '#ffffff',
    black: '#000000',
    background: colors.neutral[900],
    text: colors.neutral[200],
    text_muted: colors.neutral[600],
    // primary: {
    //   100: '#FEE9EF',
    //   200: '#FBB2C8',
    //   300: '#F65088',
    //   400: '#DC2F70',
    //   500: '#951E51',
    // },
    // secondary: {
    //   100: '#DEEAFD',
    //   200: '#6BA7F7',
    //   300: '#2F62F4',
    //   400: '#2D4FD9',
    //   500: '#2A3E81',
    // },
    // tertiary: {
    //   100: '#FDF6E0',
    //   200: '#FADD9A',
    //   300: '#F2A90D',
    //   400: '#A05F26',
    //   500: '#6D3E25',
    // },
    // info: {
    //   100: '#CEF5FC',
    //   200: '#9FEBFA',
    //   300: '#50DBF6',
    //   400: '#0BA9CD',
    //   500: '#1A6D8B',
    // },
    // success: {
    //   100: '#E9FEE3',
    //   200: '#A8FAA6',
    //   300: '#50F66B',
    //   400: '#09A74A',
    //   500: '#216230',
    // },
    // error: {
    //   100: '#FEE4E3',
    //   200: '#FAAAA6',
    //   300: '#EA4C40',
    //   400: '#D32E19',
    //   500: '#912318',
    // },
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
