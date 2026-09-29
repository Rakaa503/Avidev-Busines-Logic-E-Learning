import type { CsrfConfig } from "./csrf";
import type { XssConfig } from "./xss";
import type { HeaderConfig } from "./headers";
import type { CorsConfig } from "./cors";
import type { CookieConfig } from "./cookies";
import type { ProxyConfig } from "./proxy";
import type { RateLimitConfig } from "./rate-limit";

export interface SecurityConfig {
  csrf?: Partial<CsrfConfig>;
  xss?: Partial<XssConfig>;
  headers?: Partial<HeaderConfig>;
  cors?: Partial<CorsConfig>;
  cookies?: Partial<CookieConfig>;
  proxy?: Partial<ProxyConfig>;
  rateLimit?: Partial<RateLimitConfig>;
}

export interface SecurityModule {
  readonly name: string;
  readonly version: string;
}

export interface SecurityResult {
  success: boolean;
  message: string;
}

export interface ClientInfo {
  ip: string;
  host?: string;
  protocol?: string;
}

export interface SecurityHeaders {
  [key: string]: string;
}