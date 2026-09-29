import { defaultHeaderConfig, HeaderConfig } from "./config";
import { DEFAULT_SECURITY_HEADERS } from "./defaults";

export class SecurityHeadersBuilder {
  private readonly headers = new Map<string, string>();

  static create(): SecurityHeadersBuilder {
    return new SecurityHeadersBuilder();
  }

  withDefaults(
    config: HeaderConfig = defaultHeaderConfig,
  ): SecurityHeadersBuilder {
    if (config.contentSecurityPolicy) {
      this.headers.set(
        "Content-Security-Policy",
        DEFAULT_SECURITY_HEADERS["Content-Security-Policy"],
      );
    }

    if (config.strictTransportSecurity) {
      this.headers.set(
        "Strict-Transport-Security",
        DEFAULT_SECURITY_HEADERS["Strict-Transport-Security"],
      );
    }

    if (config.frameOptions) {
      this.headers.set(
        "X-Frame-Options",
        DEFAULT_SECURITY_HEADERS["X-Frame-Options"],
      );
    }

    if (config.contentTypeOptions) {
      this.headers.set(
        "X-Content-Type-Options",
        DEFAULT_SECURITY_HEADERS["X-Content-Type-Options"],
      );
    }

    if (config.referrerPolicy) {
      this.headers.set(
        "Referrer-Policy",
        DEFAULT_SECURITY_HEADERS["Referrer-Policy"],
      );
    }

    if (config.permissionsPolicy) {
      this.headers.set(
        "Permissions-Policy",
        DEFAULT_SECURITY_HEADERS["Permissions-Policy"],
      );
    }

    return this;
  }

  add(name: string, value: string): SecurityHeadersBuilder {
    this.headers.set(name, value);
    return this;
  }

  remove(name: string): SecurityHeadersBuilder {
    this.headers.delete(name);
    return this;
  }

  build(): Readonly<Record<string, string>> {
    return Object.freeze(
      Object.fromEntries(this.headers),
    );
  }
}