export type LogLevel =
  | "INFO"
  | "SUCCESS"
  | "WARN"
  | "ERROR"
  | "DEBUG"
  | "SECURITY"
  | "DATABASE"
  | "ACCESS"
  | "FATAL";

export class Logger {
  private colors: Record<LogLevel, string> = {
    INFO: "\x1b[36m",       // Cyan
    SUCCESS: "\x1b[32m",    // Green
    WARN: "\x1b[33m",       // Yellow
    ERROR: "\x1b[31m",      // Red
    DEBUG: "\x1b[35m",      // Magenta
    SECURITY: "\x1b[91m",   // Bright Red
    DATABASE: "\x1b[34m",   // Blue
    ACCESS: "\x1b[96m",     // Bright Cyan
    FATAL: "\x1b[41m\x1b[37m", // White text + Red background
  };

  private readonly RESET = "\x1b[0m";

  private getTimestamp(): string {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  private log(level: LogLevel, message: string): void {
    const color = this.colors[level];

    console.log(
      `[${this.getTimestamp()}] ${color}${level.padEnd(9)}${this.RESET} ${message}`
    );
  }

  info(message: string): void {
    this.log("INFO", message);
  }

  success(message: string): void {
    this.log("SUCCESS", message);
  }

  warn(message: string): void {
    this.log("WARN", message);
  }

  error(message: string): void {
    this.log("ERROR", message);
  }

  debug(message: string): void {
    this.log("DEBUG", message);
  }

  security(message: string): void {
    this.log("SECURITY", message);
  }

  database(message: string): void {
    this.log("DATABASE", message);
  }

  access(message: string): void {
    this.log("ACCESS", message);
  }

  fatal(message: string): void {
    this.log("FATAL", message);
  }
}

export const logger = new Logger();