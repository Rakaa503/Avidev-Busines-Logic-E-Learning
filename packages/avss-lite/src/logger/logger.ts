import { getTimestamp } from "./formatter";
import { printConsole } from "./console";
import { logWriter } from "./writer";
import { loggerConfig } from "./config";
import { LogEntry, LogLevel } from "./types";

export class Logger {

  private log(level: LogLevel, message: string): void {

    const entry: LogEntry = {
      level,
      message,
      timestamp: getTimestamp(),
    };

    printConsole(entry);

    if (loggerConfig.file) {
      logWriter.write(entry);
    }
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