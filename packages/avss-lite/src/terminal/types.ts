export type StatusType =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "section";

export interface BoxOptions {
  width?: number;
  padding?: number;
}

export interface DividerOptions {
  char?: string;
  length?: number;
}

export interface StatusOptions {
  icon?: boolean;
}