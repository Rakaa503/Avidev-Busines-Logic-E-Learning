import type { AuditEntry } from "./types";

export function formatAudit(entry: AuditEntry): string {
  const lines: string[] = [];

  lines.push("══════════════════════════════════════");
  lines.push(`📋 ${entry.event}`);
  lines.push("");

  if (entry.user) {
    lines.push(`👤 User  : ${entry.user.name}`);
    lines.push(`🆔 ID    : ${entry.user.id}`);

    if (entry.user.email) {
      lines.push(`📧 Email : ${entry.user.email}`);
    }

    if (entry.user.role) {
      lines.push(`🛡️ Role  : ${entry.user.role}`);
    }
  }

  if (entry.ip) {
    lines.push(`🌐 IP    : ${entry.ip}`);
  }

  if (entry.userAgent) {
    lines.push(`💻 Agent : ${entry.userAgent}`);
  }

  if (entry.message) {
    lines.push(`📝 Note  : ${entry.message}`);
  }

  lines.push(
    `🕒 Time  : ${entry.timestamp.toLocaleString()}`
  );

  lines.push("══════════════════════════════════════");

  return lines.join("\n");
}