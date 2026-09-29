export function progress(
  current = 1,
  total = 1,
  width = 30,
): void {
  const percent = Math.round((current / total) * 100);

  const filled = Math.round((percent / 100) * width);

  const empty = width - filled;

  const bar =
    "█".repeat(filled) +
    "░".repeat(empty);

  console.log(`[${bar}] ${percent}%`);
}