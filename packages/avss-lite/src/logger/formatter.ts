import { COLORS, EMOJI, RESET } from "./colors";
import { loggerConfig } from "./config";
import { LogEntry } from "./types";

export function getTimestamp(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export function formatLog(entry: LogEntry): string {
  const color = COLORS[entry.level];
  const emoji = loggerConfig.emoji ? `${EMOJI[entry.level]} ` : "";

  const time = loggerConfig.timestamp
    ? `[${entry.timestamp}] `
    : "";

  return `${time}${color}${emoji}${entry.level.padEnd(9)}${RESET} ${entry.message}`;
}