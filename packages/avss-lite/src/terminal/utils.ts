export function center(text: string, width = 54): string {
  const left = Math.floor((width - text.length) / 2);

  return " ".repeat(Math.max(0, left)) + text;
}

export function repeat(char: string, length: number): string {
  return char.repeat(length);
}

export function pad(text: string, length = 20): string {
  return text.padEnd(length);
}