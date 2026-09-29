import { defaultXssConfig, XssConfig } from "./config";
import { escapeHtml } from "./escape";

export function sanitize(
  input: string,
  config: XssConfig = defaultXssConfig,
): string {
  if (!config.enabled) {
    return input;
  }

  let value = input;

  if (config.trimInput) {
    value = value.trim();
  }

  if (config.escapeHtml) {
    value = escapeHtml(value);
  }

  return value;
}