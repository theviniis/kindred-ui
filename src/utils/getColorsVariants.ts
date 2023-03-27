type HSLColor = {
  h: number;
  s: number;
  l: number;
};

export function parseHSLColor(color: string): HSLColor | null {
  const match = color.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/);

  if (!match) {
    return null;
  }

  const h = Number(match[1]);
  const s = Number(match[2]);
  const l = Number(match[3]);

  return { h, s, l };
}
type ColorVariantKeys =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type ColorVariants = {
  [key in ColorVariantKeys]: string;
};

export function getColorsVariants(color: string): ColorVariants | null {
  const hslColor = parseHSLColor(color);
  if (!hslColor) {
    return null;
  }
  const { h, s, l } = hslColor;
  const variants: ColorVariants = {
    '50': '',
    '100': '',
    '200': '',
    '300': '',
    '400': '',
    '500': '',
    '600': '',
    '700': '',
    '800': '',
    '900': '',
  };
  variants['50'] = hslToHex(h, s, l + 20);
  variants['100'] = hslToHex(h, s, l + 16);
  variants['200'] = hslToHex(h, s, l + 12);
  variants['300'] = hslToHex(h, s, l + 8);
  variants['400'] = hslToHex(h, s, l + 4);
  variants['500'] = hslToHex(h, s, l);
  variants['600'] = hslToHex(h, s, l - 4);
  variants['700'] = hslToHex(h, s, l - 8);
  variants['800'] = hslToHex(h, s, l - 12);
  variants['900'] = hslToHex(h, s, l - 16);
  return variants;
}
function hslToHex(h: number, s: number, l: number): string {
  h /= 360;
  s /= 100;
  l /= 100;
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
