export interface ProxyConfig {
  enabled: boolean;
  trustedProxies: string[];
  trustForwardedHost: boolean;
  trustForwardedProto: boolean;
}

export const defaultProxyConfig: Readonly<ProxyConfig> = {
  enabled: true,

  trustedProxies: [
    "127.0.0.1",
    "::1",
  ],

  trustForwardedHost: true,

  trustForwardedProto: true,
};