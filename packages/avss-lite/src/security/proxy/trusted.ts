import {
  ProxyConfig,
  defaultProxyConfig,
} from "./config";

export interface ProxyHeaders {
  "x-forwarded-for"?: string;
  "x-forwarded-host"?: string;
  "x-forwarded-proto"?: string;
}

export interface ProxyInfo {
  clientIp: string;
  host?: string;
  protocol?: string;
}

export function getProxyInfo(
  headers: ProxyHeaders,
  config: ProxyConfig = defaultProxyConfig,
): ProxyInfo {
  if (!config.enabled) {
    return {
      clientIp: "127.0.0.1",
    };
  }

  const forwardedFor =
    headers["x-forwarded-for"]?.split(",")[0]?.trim() ??
    "127.0.0.1";

  return {
    clientIp: forwardedFor,

    host: config.trustForwardedHost
      ? headers["x-forwarded-host"]
      : undefined,

    protocol: config.trustForwardedProto
      ? headers["x-forwarded-proto"]
      : undefined,
  };
}

export function isTrustedProxy(
  ip: string,
  config: ProxyConfig = defaultProxyConfig,
): boolean {
  return config.trustedProxies.includes(ip);
}