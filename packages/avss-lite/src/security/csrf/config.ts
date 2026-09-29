export interface CsrfConfig {
  /**
   * Header yang digunakan untuk mengirim CSRF token.
   */
  headerName: string;

  /**
   * Panjang token yang dihasilkan.
   */
  tokenLength: number;

  /**
   * Mengaktifkan validasi CSRF.
   */
  enabled: boolean;
}

export const defaultCsrfConfig: Readonly<CsrfConfig> = {
  headerName: "x-csrf-token",
  tokenLength: 32,
  enabled: true,
};