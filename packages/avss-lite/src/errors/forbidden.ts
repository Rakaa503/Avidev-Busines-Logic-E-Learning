import { AVSSError } from "./base";
import { ErrorCode } from "./codes";

export class ForbiddenError extends AVSSError {
  constructor(message = "Forbidden") {
    super(message, 403, ErrorCode.FORBIDDEN);
  }
}