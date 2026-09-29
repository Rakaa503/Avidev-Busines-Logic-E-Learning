import { AVSSError } from "./base";
import { ErrorCode } from "./codes";

export class ValidationError extends AVSSError {
  constructor(message = "Validation Failed") {
    super(message, 400, ErrorCode.VALIDATION_ERROR);
  }
}