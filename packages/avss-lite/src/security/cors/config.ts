export interface CorsConfig {
  enabled: boolean;
  origin: string | string[];
  methods: string[];
  headers: string[];
  credentials: boolean;
  maxAge: number;
}

export const defaultCorsConfig: Readonly<CorsConfig> = {
  enabled: true,

  origin: "*",

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  headers: [
    "Content-Type",
    "Authorization",
    "X-CSRF-Token",
  ],

  credentials: true,

  maxAge: 86400,
};