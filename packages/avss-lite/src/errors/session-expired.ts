import { AVSSError } from "./base";
import { ErrorCode } from "./codes";

export class SessionExpiredError extends AVSSError {
  constructor(message = "Session Expired") {
    super(message, 401, ErrorCode.SESSION_EXPIRED);
  }
}