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

export interface LoggerConfig {
  console: boolean;
  file: boolean;
  timestamp: boolean;
  emoji: boolean;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
}