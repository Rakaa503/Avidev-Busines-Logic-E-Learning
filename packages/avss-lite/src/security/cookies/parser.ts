import {
  CookieConfig,
  defaultCookieConfig,
} from "./config";

export type CookieMap = Record<string, string>;

export function parseCookies(cookieHeader: string): CookieMap {
  if (!cookieHeader.trim()) {
    return {};
  }

  return cookieHeader
    .split(";")
    .reduce<CookieMap>((cookies, cookie) => {
      const index = cookie.indexOf("=");

      if (index === -1) {
        return cookies;
      }

      const key = cookie.slice(0, index).trim();
      const value = cookie.slice(index + 1).trim();

      cookies[key] = decodeURIComponent(value);

      return cookies;
    }, {});
}

export function serializeCookie(
  name: string,
  value: string,
  config: CookieConfig = defaultCookieConfig,
): string {
  const parts: string[] = [];

  parts.push(`${name}=${encodeURIComponent(value)}`);
  parts.push(`Path=${config.path}`);
  parts.push(`Max-Age=${config.maxAge}`);

  if (config.httpOnly) {
    parts.push("HttpOnly");
  }

  if (config.secure) {
    parts.push("Secure");
  }

  parts.push(`SameSite=${config.sameSite}`);

  return parts.join("; ");
}