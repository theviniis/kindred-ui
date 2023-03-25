export function lighten(color: string, lightenValue: number): string {
  // Parse the input color string into separate R, G, B values
  let r: number, g: number, b: number;
  if (color.startsWith('#')) {
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);
  } else if (color.startsWith('rgb(')) {
    const values = color.slice(4, -1).split(',');
    r = parseInt(values[0], 10);
    g = parseInt(values[1], 10);
    b = parseInt(values[2], 10);
  } else if (color === 'transparent') {
    return 'transparent';
  } else {
    throw new Error('Invalid color format');
  }

  // Adjust each R, G, B value by the lighten value
  r = Math.min(Math.floor(r + (255 - r) * lightenValue), 255);
  g = Math.min(Math.floor(g + (255 - g) * lightenValue), 255);
  b = Math.min(Math.floor(b + (255 - b) * lightenValue), 255);

  // Convert the adjusted R, G, B values back to a color string
  if (color.startsWith('#')) {
    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}
