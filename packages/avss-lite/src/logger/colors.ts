import { LogLevel } from "./types";

export const RESET = "\x1b[0m";

export const COLORS: Record<LogLevel, string> = {
  INFO: "\x1b[36m",
  SUCCESS: "\x1b[32m",
  WARN: "\x1b[33m",
  ERROR: "\x1b[31m",
  DEBUG: "\x1b[35m",
  SECURITY: "\x1b[91m",
  DATABASE: "\x1b[34m",
  ACCESS: "\x1b[96m",
  FATAL: "\x1b[41m\x1b[37m",
};

export const EMOJI: Record<LogLevel, string> = {
  INFO: "ℹ️",
  SUCCESS: "✅",
  WARN: "⚠️",
  ERROR: "❌",
  DEBUG: "🐞",
  SECURITY: "🛡️",
  DATABASE: "🗄️",
  ACCESS: "🌐",
  FATAL: "💀",
};