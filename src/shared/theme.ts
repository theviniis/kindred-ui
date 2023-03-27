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
    width: 0,
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
  fuchsia: {
    '50': '#ffe0eb',
    '100': '#ffc2d6',
    '200': '#ffa3c2',
    '300': '#ff85ad',
    '400': '#ff6699',
    '500': '#ff4785',
    '600': '#ff2970',
    '700': '#ff0a5c',
    '800': '#eb004e',
    '900': '#cc0044',
  },
  blue: {
    '50': '#b3e1fe',
    '100': '#95d6fe',
    '200': '#77cafe',
    '300': '#58befd',
    '400': '#3ab2fd',
    '500': '#1ca6fd',
    '600': '#029af7',
    '700': '#0287d9',
    '800': '#0274bb',
    '900': '#02619d',
  },
  yellow: {
    '50': '#ffdf99',
    '100': '#ffd57a',
    '200': '#ffcb5c',
    '300': '#ffc23d',
    '400': '#ffb81f',
    '500': '#ffae00',
    '600': '#e09900',
    '700': '#c28400',
    '800': '#a37000',
    '900': '#855b00',
  },
  cyan: {
    '50': '#e0faff',
    '100': '#c2f5ff',
    '200': '#a3f0ff',
    '300': '#85ebff',
    '400': '#66e5ff',
    '500': '#47e0ff',
    '600': '#29dbff',
    '700': '#0ad6ff',
    '800': '#00c3eb',
    '900': '#00aacc',
  },
  green: {
    '50': '#bfe5ae',
    '100': '#adde96',
    '200': '#9bd77f',
    '300': '#89cf68',
    '400': '#76c851',
    '500': '#65be3c',
    '600': '#59a735',
    '700': '#4c8f2d',
    '800': '#407826',
    '900': '#34611f',
  },
  red: {
    '50': '#fcc9c5',
    '100': '#faada8',
    '200': '#f9928b',
    '300': '#f7776e',
    '400': '#f65c51',
    '500': '#f44034',
    '600': '#f32516',
    '700': '#df1a0c',
    '800': '#c2160a',
    '900': '#a51309',
  },
};

export const colors = {
  background: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  text: {
    primary: palette.neutral[800],
    secondary: palette.neutral[500],
    disabled: palette.neutral[300],
  },
  coreColors: {
    neutral: palette.neutral[500],
    fuchsia: palette.fuchsia[500],
    blue: palette.blue[500],
    yellow: palette.yellow[500],
    cyan: palette.cyan[500],
    green: palette.green[500],
    red: palette.red[500],
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
      secondary: palette.neutral[500],
      disabled: palette.neutral[600],
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
