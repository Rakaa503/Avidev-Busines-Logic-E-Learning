import {
  defaultRateLimitConfig,
  RateLimitConfig,
} from "./config";

import {
  MemoryStore,
  RateLimitEntry,
} from "./memory";

const memoryStore = new MemoryStore();

interface RateLimitResult {
  success: boolean;
  remaining: number;
  retryAfter: number;
}

export function rateLimit(
  key: string,
  config: RateLimitConfig = defaultRateLimitConfig,
): RateLimitResult {
  if (!config.enabled) {
    return {
      success: true,
      remaining: config.maxRequests,
      retryAfter: 0,
    };
  }

  const now = Date.now();

  let entry: RateLimitEntry | undefined =
    memoryStore.get(key);

  if (!entry || now >= entry.resetAt) {
    entry = {
      count: 0,
      resetAt: now + config.windowMs,
    };
  }

  entry.count++;

  memoryStore.set(key, entry);

  const remaining = Math.max(
    config.maxRequests - entry.count,
    0,
  );

  if (entry.count > config.maxRequests) {
    return {
      success: false,
      remaining: 0,
      retryAfter: Math.ceil(
        (entry.resetAt - now) / 1000,
      ),
    };
  }

  return {
    success: true,
    remaining,
    retryAfter: 0,
  };
}