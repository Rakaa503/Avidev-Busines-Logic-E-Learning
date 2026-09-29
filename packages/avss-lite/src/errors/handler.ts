import { AVSSError } from "./base";

export interface ErrorResponse {
  success: false;
  error: {
    name: string;
    message: string;
    status: number;
    code: string;
    timestamp: string;
  };
}

export function errorHandler(error: unknown): ErrorResponse {
  if (error instanceof AVSSError) {
    return {
      success: false,
      error: {
        name: error.name,
        message: error.message,
        status: error.status,
        code: error.code,
        timestamp: error.timestamp.toISOString(),
      },
    };
  }

  return {
    success: false,
    error: {
      name: "InternalServerError",
      message: "Internal Server Error",
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      timestamp: new Date().toISOString(),
    },
  };
}