export interface AuditUser {
  id: string;
  name: string;
  email?: string;
  role?: string;
}

export interface AuditEntry {
  event: string;
  user?: AuditUser;
  message?: string;
  ip?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

export interface AuditOptions {
  enabled?: boolean;
  showTimestamp?: boolean;
  showUserAgent?: boolean;
  showIp?: boolean;
}