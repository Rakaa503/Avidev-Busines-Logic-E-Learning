import ora, { Ora } from "ora";

export class Spinner {
  private spinner: Ora;

  constructor(text = "Loading...") {
    this.spinner = ora(text);
  }

  start(): void {
    this.spinner.start();
  }

  success(text?: string): void {
    this.spinner.succeed(text);
  }

  fail(text?: string): void {
    this.spinner.fail(text);
  }

  warn(text?: string): void {
    this.spinner.warn(text);
  }

  info(text?: string): void {
    this.spinner.info(text);
  }

  stop(): void {
    this.spinner.stop();
  }
}