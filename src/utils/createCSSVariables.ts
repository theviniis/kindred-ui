import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';

interface Token {
  name: string;
  value: string | number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformObject(obj: any, parentKeys: string[] = []): Token[] {
  const tokens: Token[] = [];
  for (const key in obj) {
    const currentKeys = [...parentKeys, key];
    const currentKey = currentKeys.join('-');
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      tokens.push(...transformObject(obj[key], currentKeys));
    } else {
      const value = obj[key];
      tokens.push({ name: camelToSnake(currentKey), value });
    }
  }
  return tokens;
}

export function createCSSVariables({
  theme,
}: {
  theme: DefaultTheme;
}): FlattenSimpleInterpolation {
  const tokens = [
    'colors',
    'border',
    'spacing',
    'size',
    'typesystem',
    'typography',
    'breakpoints',
  ] as const;
  return css`
    body {
      ${tokens.map(token =>
        transformObject(theme[token]).map(
          ({ name, value }) => css`
            ${`--${token.replace('colors', 'clr')}-${name.replace(
              'palette-',
              ''
            )}: ${value}`};
          `
        )
      )}
    }
  `;
}

function camelToSnake(camelString: string): string {
  return camelString.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}
