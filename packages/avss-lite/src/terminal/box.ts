export function box(
  title: string,
  width = 54,
): void {
  const line = "═".repeat(width);

  console.log(`╔${line}╗`);

  console.log(
    `║${title.padStart((width + title.length) / 2).padEnd(width)}║`,
  );

  console.log(`╚${line}╝`);
}