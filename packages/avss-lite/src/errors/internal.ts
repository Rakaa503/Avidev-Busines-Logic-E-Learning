import { AVSSError } from "./base";
import { ErrorCode } from "./codes";

export class InternalServerError extends AVSSError {
  constructor(message = "Internal Server Error") {
    super(message, 500, ErrorCode.INTERNAL_SERVER_ERROR);
  }
}