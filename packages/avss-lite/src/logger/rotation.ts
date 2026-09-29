import fs from "fs";
import path from "path";
import { LOG_FOLDER } from "./constants";

export function rotateLogs(): void {

  const folder = path.join(process.cwd(), LOG_FOLDER);

  if (!fs.existsSync(folder)) {
    return;
  }

  console.log("📦 Log rotation checked.");

}