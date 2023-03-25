import { Story } from '@storybook/react';
import React from 'react';
import { themes } from '../../..';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.border.radius.xs + 'px'};
  * div {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  .css-1k3ehpp,
  .css-1mmxhot span {
    color: ${({ theme }) => theme.colors.text.secondary} !important;
  }
  .css-wk618k,
  .css-1030d3v {
    background: none;
  }
`;

export const Dark: Story = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Wrapper>
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
            } else if (typeof v === 'object' && !k.match(/palette/i)) {
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
            } else if (k === 'palette') {
              return Object.entries(themes.dark.colors.palette).map(
                ([k, v]) => {
                  return (
                    <ColorItem
                      subtitle={`theme.colors.palette${k}`}
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
              );
            }
            return null;
          })}
        </ColorPalette>
      </Wrapper>
    </ThemeProvider>
  );
};

export const Light: Story = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Wrapper>
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
            } else if (typeof v === 'object' && !k.match(/palette/i)) {
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
            } else if (k === 'palette') {
              return Object.entries(themes.dark.colors.palette).map(
                ([k, v]) => {
                  return (
                    <ColorItem
                      subtitle={`theme.colors.palette.${k}`}
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
              );
            }
            return null;
          })}
        </ColorPalette>
      </Wrapper>
    </ThemeProvider>
  );
};
