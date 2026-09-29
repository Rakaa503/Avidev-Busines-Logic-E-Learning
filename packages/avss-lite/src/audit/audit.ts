import { AuditEvent } from "./events";
import { formatAudit } from "./formatter";
import type { AuditEntry, AuditUser } from "./types";

export class Audit {
  log(entry: AuditEntry): void {
    console.log(formatAudit(entry));
  }

  login(user: AuditUser): void {
    this.log({
      event: AuditEvent.LOGIN,
      user,
      message: "Login Success",
      timestamp: new Date(),
    });
  }

  logout(user: AuditUser): void {
    this.log({
      event: AuditEvent.LOGOUT,
      user,
      message: "Logout Success",
      timestamp: new Date(),
    });
  }

  register(user: AuditUser): void {
    this.log({
      event: AuditEvent.REGISTER,
      user,
      message: "Account Registered",
      timestamp: new Date(),
    });
  }

  failedLogin(email: string): void {
    this.log({
      event: AuditEvent.FAILED_LOGIN,
      message: `Failed Login (${email})`,
      timestamp: new Date(),
    });
  }

  changePassword(user: AuditUser): void {
    this.log({
      event: AuditEvent.CHANGE_PASSWORD,
      user,
      message: "Password Changed",
      timestamp: new Date(),
    });
  }

  changeRole(
    user: AuditUser,
    oldRole: string,
    newRole: string
  ): void {
    this.log({
      event: AuditEvent.CHANGE_ROLE,
      user,
      message: `${oldRole} ➜ ${newRole}`,
      timestamp: new Date(),
    });
  }

  createUser(user: AuditUser): void {
    this.log({
      event: AuditEvent.CREATE_USER,
      user,
      message: "User Created",
      timestamp: new Date(),
    });
  }

  updateUser(user: AuditUser): void {
    this.log({
      event: AuditEvent.UPDATE_USER,
      user,
      message: "User Updated",
      timestamp: new Date(),
    });
  }

  deleteUser(user: AuditUser): void {
    this.log({
      event: AuditEvent.DELETE_USER,
      user,
      message: "User Deleted",
      timestamp: new Date(),
    });
  }

  verifyEmail(user: AuditUser): void {
    this.log({
      event: AuditEvent.VERIFY_EMAIL,
      user,
      message: "Email Verified",
      timestamp: new Date(),
    });
  }

  resetPassword(user: AuditUser): void {
    this.log({
      event: AuditEvent.RESET_PASSWORD,
      user,
      message: "Password Reset",
      timestamp: new Date(),
    });
  }
}

export const audit = new Audit();