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
  // warning: {
  //   100: '#8bc34a',
  //   200: '#e7f6d5',
  //   300: '#c5e1a5',
  //   400: '#aed581',
  //   500: '#689f38',
  //   600: '#558b2f',
  // },
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
};

export const spacing = {
  nano: 4,
  xsmall: 8,
  small: 16,
  medium: 24,
  larger: 32,
  xlarger: 40,
};

export const border = {
  radius: {
    xsmall: 4,
    small: 8,
    medium: 16,
    larger: 24,
    pill: 500,
    circular: '50%',
  },
  width: {
    xsmall: 1,
    small: 2,
    medium: 4,
    larger: 8,
  },
};

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
};

export const lightTheme = {
  body: colors.neutral[100],
  fontColor: colors.neutral[800],
};

export const darkTheme = {
  body: colors.neutral[800],
  fontColor: colors.neutral[100],
};
