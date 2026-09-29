export interface XssConfig {
  enabled: boolean;
  escapeHtml: boolean;
  trimInput: boolean;
}

export const defaultXssConfig: Readonly<XssConfig> = {
  enabled: true,
  escapeHtml: true,
  trimInput: true,
};