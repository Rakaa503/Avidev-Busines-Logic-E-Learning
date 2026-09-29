import { setSecurityConfig } from "./config";
import type { SecurityConfig } from "./types";

import {
  generateCsrfToken,
  validateCsrfToken,
  csrfMiddleware,
} from "./csrf";

import { sanitize } from "./xss";

import { SecurityHeadersBuilder } from "./headers";

import { createCorsHeaders } from "./cors";

import {
  parseCookies,
  serializeCookie,
} from "./cookies";

import {
  getProxyInfo,
  isTrustedProxy,
} from "./proxy";

import { rateLimit } from "./rate-limit";

export class SecurityFramework {
  constructor(config: SecurityConfig = {}) {
    setSecurityConfig(config);
  }

  public readonly csrf = {
    generateToken: generateCsrfToken,
    validateToken: validateCsrfToken,
    middleware: csrfMiddleware,
  };

  public readonly xss = {
    sanitize,
  };

  public readonly headers = {
    builder: () =>
      SecurityHeadersBuilder.create().withDefaults(),
  };

  public readonly cors = {
    createHeaders: createCorsHeaders,
  };

  public readonly cookies = {
    parse: parseCookies,
    serialize: serializeCookie,
  };

  public readonly proxy = {
    info: getProxyInfo,
    trusted: isTrustedProxy,
  };

  public readonly rateLimit = {
    check: rateLimit,
  };
}

export function createSecurity(
  config: SecurityConfig = {},
): SecurityFramework {
  return new SecurityFramework(config);
}