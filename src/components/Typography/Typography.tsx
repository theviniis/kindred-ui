import React from 'react';
import styled from 'styled-components';

export interface TypographyProps {
  children?: React.ReactNode | React.ReactNode[];
  typography: keyof typeof typographyConfig;
  color?: string;
}

export interface STypographyProps extends Pick<TypographyProps, 'color'> {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

const typographyConfig = {
  h1: {
    tag: 'h1',
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 1.1,
  },
  h2: {
    tag: 'h2',
    fontSize: 36,
    fontWeight: 600,
    lineHeight: 1.1,
  },
  h3: {
    tag: 'h3',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 1.1,
  },
  h4: {
    tag: 'h4',
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.15,
  },
  h5: {
    tag: 'h5',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.15,
  },
  h6: {
    tag: 'h6',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.15,
  },
  body1: {
    tag: 'p',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body2: {
    tag: 'p',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body3: {
    tag: 'p',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body4: {
    tag: 'p',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body5: {
    tag: 'p',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  paragraph1: {
    tag: 'p',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.25,
  },
  paragraph2: {
    tag: 'p',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.25,
  },
  paragraph3: {
    tag: 'p',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.25,
  },
  paragraph4: {
    tag: 'p',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.25,
  },
  paragraph5: {
    tag: 'p',
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 1.25,
  },
} as const;

const STypography = styled.p<STypographyProps>`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color, theme }) => (color ? color : theme.fontColor)};
`;

export const Typography: React.FC<TypographyProps> = ({
  children,
  typography = 'paragraph1',
  color,
  ...props
}) => {
  const { tag, fontSize, fontWeight, lineHeight } = typographyConfig[
    typography
  ];

  return (
    <STypography
      as={tag && tag}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      {...props}
    >
      {children}
    </STypography>
  );
};
