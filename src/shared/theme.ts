import { css, DefaultTheme } from 'styled-components';

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
    xxxl: '57px',
    xxl: '45px',
    xl: '36px',
    lg: '32px',
    md: '28px',
    sm: '24px',
    xs: '22px',
    xxs: '16px',
    xxxs: '14px',
    nano: '12px',
  },
  height: {
    xxxl: '64px',
    xxl: '52px',
    xl: '44px',
    lg: '40px',
    md: '36px',
    sm: '32px',
    xs: '28px',
    xxs: '24px',
    xxxs: '20px',
    nano: '16px',
  },
} as const;

export const typesystem = {
  display: {
    lg: {
      element: 'h1',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxxl,
      lineHeight: '64px',
      letterSpacing: '-0.25px',
    },
    md: {
      element: 'h2',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxl,
      lineHeight: '52px',
      letterSpacing: '0px',
    },
    sm: {
      element: 'h3',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xl,
      lineHeight: '44px',
      letterSpacing: '0px',
    },
  },
  headline: {
    lg: {
      element: 'h4',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.lg,
      lineHeight: '40px',
      letterSpacing: '0px',
    },
    md: {
      element: 'h5',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.md,
      lineHeight: '36px',
      letterSpacing: '0px',
    },
    sm: {
      element: 'h6',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.sm,
      lineHeight: '32px',
      letterSpacing: '0px',
    },
  },
  body: {
    lg: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxs,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    md: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xxxs,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    sm: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.nano,
      lineHeight: '16px',
      letterSpacing: '0.4000000059604645px',
    },
  },
  label: {
    lg: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.xxxs,
      lineHeight: '20px',
      letterSpacing: '0.10000000149011612px',
    },
    md: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.nano,
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
    sm: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: '11px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
  },
  title: {
    lg: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.regular,
      fontSize: typography.size.xs,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    md: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.xxs,
      lineHeight: '24px',
      letterSpacing: '0.15000000596046448px',
    },
    sm: {
      element: 'p',
      fontFamily: "'Open Sans', sans-serif",
      weight: typography.weight.medium,
      fontSize: typography.size.xxxs,
      lineHeight: '20px',
      letterSpacing: '0.10000000149011612px',
    },
  },
} as const;

export const spacing = {
  xxxs: '4px',
  xxs: '8px',
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
  xlg: '56px',
  xxlg: '64px',
  xxxlg: '72px',
} as const;

export const size = {
  xxxs: '4px',
  xxs: '8px',
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
  xlg: '56px',
  xxlg: '64px',
  xxxlg: '72px',
} as const;

export const border = {
  radius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '500px',
    circular: '50%',
  },
  width: {
    xs: '1px',
    sm: '2px',
    md: '4px',
    lg: '8px',
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
  fadeIn: css`
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
  fadeUp: css`
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
} as const;

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
  pink: {
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
    pink: palette.pink[500],
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
  size,
  spacing,
  border,
  breakpoints,
  keyframes,
} as const;

export const lightTheme: DefaultTheme = {
  scheme: 'light',
  colors: { ...colors },
  ...theme,
} as const;

export const darkTheme: DefaultTheme = {
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
} as const;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;
declare module 'styled-components' {
  export interface DefaultTheme {
    scheme: 'light' | 'dark';
    colors: typeof colors;
    typography: typeof typography;
    typesystem: typeof typesystem;
    size: typeof size;
    spacing: typeof spacing;
    border: typeof border;
    breakpoints: typeof breakpoints;
    keyframes: Record<keyof typeof keyframes, 'FlattenSimpleInterpolation'>;
  }
}
