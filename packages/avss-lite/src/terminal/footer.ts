import { divider } from "./divider";
import { info } from "./status";

export interface FooterOptions {
  framework: string;
  version: string;
  runtime?: string;
  status?: string;
}

export function footer({
  framework,
  version,
  runtime = process.version,
  status = "SUCCESS",
}: FooterOptions): void {
  divider();

  info(`Framework : ${framework}`);
  info(`Version   : ${version}`);
  info(`Runtime   : ${runtime}`);
  info(`Status    : ${status}`);

  divider();

  console.log("\n🚀 READY FOR PRODUCTION\n");
}