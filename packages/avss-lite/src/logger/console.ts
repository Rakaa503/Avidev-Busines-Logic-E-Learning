import { loggerConfig } from "./config";
import { formatLog } from "./formatter";
import { LogEntry } from "./types";

export function printConsole(entry: LogEntry): void {

  if (!loggerConfig.console) {
    return;
  }

  console.log(formatLog(entry));

}