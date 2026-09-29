export interface RateLimitConfig {
  enabled: boolean;
  windowMs: number;
  maxRequests: number;
}

export const defaultRateLimitConfig: Readonly<RateLimitConfig> = {
  enabled: true,
  windowMs: 60_000,
  maxRequests: 100,
};