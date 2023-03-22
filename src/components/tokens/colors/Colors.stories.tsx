import { Story } from '@storybook/react';
import React from 'react';
import { themes } from '../../..';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ scheme: 'light' | 'dark' }>`
  ${({ scheme = 'light' }) => css`
    padding: 2rem;
    background: ${themes[scheme].colors.background};
    border-radius: ${themes[scheme].border.radius.xs + 'px'};
    .css-1cic1f4 {
      color: ${themes[scheme].colors.foreground} !important;
    }
    div,
    div::before {
      color: ${themes[scheme].colors.neutral[500]} !important;
    }
    .css-wk618k {
      background: none;
    }
  `}
`;

export const Dark: Story = () => {
  return (
    <Wrapper scheme="dark">
      {/* @ts-ignore */}
      <ColorPalette>
        {Object.entries(themes.dark.colors).map(([k, v]) => {
          if (
            typeof v === 'string' &&
            (v.match(/^#/) || v.match(/^rgb/) || k.match(/color/i))
          ) {
            return (
              <ColorItem
                subtitle={`theme.colors.${k}`}
                key={k}
                title={k}
                colors={{ [k]: v }}
              />
            );
          } else if (typeof v === 'object' && !k.match(/gradient/i)) {
            return (
              <ColorItem
                subtitle={`theme.colors.${k}`}
                key={k}
                title={k}
                colors={Object.entries(v).reduce(
                  (acc, [key, value]) =>
                    typeof value === 'string' &&
                    (value.match(/^#/) ||
                      value.match(/^rgb/) ||
                      key.match(/color/i))
                      ? { ...acc, [key]: value }
                      : acc,
                  {}
                )}
              />
            );
          }
          return null;
        })}
      </ColorPalette>
    </Wrapper>
  );
};

export const Light: Story = () => {
  return (
    <Wrapper scheme="light">
      {/* @ts-ignore */}
      <ColorPalette>
        {Object.entries(themes.light.colors).map(([k, v]) => {
          if (
            typeof v === 'string' &&
            (v.match(/^#/) || v.match(/^rgb/) || k.match(/color/i))
          ) {
            return (
              <ColorItem
                subtitle={`theme.colors.${k}`}
                key={k}
                title={k}
                colors={{ [k]: v }}
              />
            );
          } else if (typeof v === 'object' && !k.match(/gradient/i)) {
            return (
              <ColorItem
                subtitle={`theme.colors.${k}`}
                key={k}
                title={k}
                colors={Object.entries(v).reduce(
                  (acc, [key, value]) =>
                    typeof value === 'string' &&
                    (value.match(/^#/) ||
                      value.match(/^rgb/) ||
                      key.match(/color/i))
                      ? { ...acc, [key]: value }
                      : acc,
                  {}
                )}
              />
            );
          }
          return null;
        })}
      </ColorPalette>
    </Wrapper>
  );
};
