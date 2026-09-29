import { CsrfConfig, defaultCsrfConfig } from "./config";

export interface CsrfRequest {
  headers: Record<string, string | undefined>;
  csrfToken: string;
}

export interface CsrfResult {
  success: boolean;
  message: string;
}

export function csrfMiddleware(
  request: CsrfRequest,
  config: CsrfConfig = defaultCsrfConfig,
): CsrfResult {
  if (!config.enabled) {
    return {
      success: true,
      message: "CSRF Disabled",
    };
  }

  const token = request.headers[config.headerName];

  if (!token) {
    return {
      success: false,
      message: "Missing CSRF Token",
    };
  }

  if (token !== request.csrfToken) {
    return {
      success: false,
      message: "Invalid CSRF Token",
    };
  }

  return {
    success: true,
    message: "CSRF Verified",
  };
}