import type { SecurityConfig } from "./types";

let config: SecurityConfig = {};

export function setSecurityConfig(
  value: SecurityConfig,
): void {
  config = {
    ...config,
    ...value,
  };
}

export function getSecurityConfig(): Readonly<SecurityConfig> {
  return Object.freeze({
    ...config,
  });
}

export function resetSecurityConfig(): void {
  config = {};
}