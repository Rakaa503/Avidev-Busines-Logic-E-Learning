import fs from "fs";
import { fileManager } from "./file";
import { LOG_FILES } from "./constants";
import { LogEntry } from "./types";

export class LogWriter {

  write(entry: LogEntry): void {

    const appLog =
      fileManager.getFilePath(LOG_FILES.APP);

    fs.appendFileSync(
      appLog,
      `[${entry.timestamp}] ${entry.level} ${entry.message}\n`
    );

    switch (entry.level) {

      case "ERROR":
        fs.appendFileSync(
          fileManager.getFilePath(LOG_FILES.ERROR),
          `[${entry.timestamp}] ${entry.message}\n`
        );
        break;

      case "SECURITY":
        fs.appendFileSync(
          fileManager.getFilePath(LOG_FILES.SECURITY),
          `[${entry.timestamp}] ${entry.message}\n`
        );
        break;

      case "DATABASE":
        fs.appendFileSync(
          fileManager.getFilePath(LOG_FILES.DATABASE),
          `[${entry.timestamp}] ${entry.message}\n`
        );
        break;

      case "ACCESS":
        fs.appendFileSync(
          fileManager.getFilePath(LOG_FILES.ACCESS),
          `[${entry.timestamp}] ${entry.message}\n`
        );
        break;

      case "DEBUG":
        fs.appendFileSync(
          fileManager.getFilePath(LOG_FILES.DEBUG),
          `[${entry.timestamp}] ${entry.message}\n`
        );
        break;

      case "FATAL":
        fs.appendFileSync(
          fileManager.getFilePath(LOG_FILES.FATAL),
          `[${entry.timestamp}] ${entry.message}\n`
        );
        break;
    }
  }

}

export const logWriter = new LogWriter();