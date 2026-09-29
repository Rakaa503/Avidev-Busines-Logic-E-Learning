export interface HeaderConfig {
  contentSecurityPolicy: boolean;
  strictTransportSecurity: boolean;
  frameOptions: boolean;
  contentTypeOptions: boolean;
  referrerPolicy: boolean;
  permissionsPolicy: boolean;
}

export const defaultHeaderConfig: Readonly<HeaderConfig> = {
  contentSecurityPolicy: true,
  strictTransportSecurity: true,
  frameOptions: true,
  contentTypeOptions: true,
  referrerPolicy: true,
  permissionsPolicy: true,
};