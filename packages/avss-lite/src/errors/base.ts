import { ErrorCode } from "./codes";

export class AVSSError extends Error {
  public readonly status: number;
  public readonly code: ErrorCode;
  public readonly timestamp: Date;

  constructor(
    message: string,
    status: number,
    code: ErrorCode
  ) {
    super(message);

    this.name = this.constructor.name;
    this.status = status;
    this.code = code;
    this.timestamp = new Date();

    Object.setPrototypeOf(this, new.target.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      timestamp: this.timestamp.toISOString(),
    };
  }
}