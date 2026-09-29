import { logger } from "./logger";

export interface RequestLog {

  method: string;

  url: string;

  status: number;

  ip?: string;

}

export function logRequest(req: RequestLog): void {

  logger.access(
    `${req.method} ${req.url} | ${req.status} | ${req.ip ?? "-"}`
  );

}