export interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export interface RateLimiterOptions {
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  reset: number;
}

export class MemoryStore {
  private readonly store = new Map<string, RateLimitEntry>();

  get(key: string): RateLimitEntry | undefined {
    return this.store.get(key);
  }

  set(key: string, value: RateLimitEntry): void {
    this.store.set(key, value);
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  keys(): string[] {
    return [...this.store.keys()];
  }

  size(): number {
    return this.store.size;
  }
}

export class RateLimiter {
  private readonly store = new MemoryStore();

  constructor(
    private readonly options: RateLimiterOptions,
  ) {}

  consume(key: string): RateLimitResult {
    const now = Date.now();

    let entry = this.store.get(key);

    if (!entry || now >= entry.resetAt) {
      entry = {
        count: 0,
        resetAt: now + this.options.windowMs,
      };
    }

    entry.count++;

    this.store.set(key, entry);

    return {
      allowed: entry.count <= this.options.limit,
      remaining: Math.max(
        0,
        this.options.limit - entry.count,
      ),
      reset: entry.resetAt,
    };
  }

  stats() {
    return {
      keys: this.store.size(),
      limit: this.options.limit,
      windowMs: this.options.windowMs,
    };
  }

  keys(): string[] {
    return this.store.keys();
  }

  clear(): void {
    this.store.clear();
  }
}