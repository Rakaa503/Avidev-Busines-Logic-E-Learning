import { AVSSError } from "./base";
import { ErrorCode } from "./codes";

export class UnauthorizedError extends AVSSError {
  constructor(message = "Unauthorized") {
    super(message, 401, ErrorCode.UNAUTHORIZED);
  }
}