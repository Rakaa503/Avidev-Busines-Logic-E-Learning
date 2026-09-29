export interface LoginEvent {
  id: string;
  name: string;
  email?: string;
  role?: string;
}

export interface LogoutEvent {
  id: string;
  name: string;
}

export interface RegisterEvent {
  id: string;
  name: string;
  email?: string;
}

export interface FailedLoginEvent {
  email: string;
}

export interface EventMap {
  login: LoginEvent;
  logout: LogoutEvent;
  register: RegisterEvent;
  failedLogin: FailedLoginEvent;
  changePassword: LoginEvent;
  changeRole: LoginEvent;
  deleteUser: LoginEvent;
  verifyEmail: LoginEvent;
  resetPassword: LoginEvent;
}

export type EventName = keyof EventMap;