import { randomBytes } from "node:crypto";
import { CsrfConfig, defaultCsrfConfig } from "./config";

export function generateCsrfToken(
  config: CsrfConfig = defaultCsrfConfig,
): string {
  return randomBytes(config.tokenLength).toString("hex");
}

export function validateCsrfToken(
  token: string,
  expected: string,
): boolean {
  return token.length > 0 && token === expected;
}