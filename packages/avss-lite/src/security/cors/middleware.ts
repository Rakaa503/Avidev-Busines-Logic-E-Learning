import {
  CorsConfig,
  defaultCorsConfig,
} from "./config";

export interface CorsHeaders {
  [key: string]: string;
}

export function createCorsHeaders(
  config: CorsConfig = defaultCorsConfig,
): Readonly<CorsHeaders> {
  if (!config.enabled) {
    return {};
  }

  return Object.freeze({
    "Access-Control-Allow-Origin":
      Array.isArray(config.origin)
        ? config.origin.join(",")
        : config.origin,

    "Access-Control-Allow-Methods":
      config.methods.join(","),

    "Access-Control-Allow-Headers":
      config.headers.join(","),

    "Access-Control-Allow-Credentials":
      String(config.credentials),

    "Access-Control-Max-Age":
      String(config.maxAge),
  });
}