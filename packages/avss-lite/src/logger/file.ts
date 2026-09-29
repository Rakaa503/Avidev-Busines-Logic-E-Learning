import fs from "fs";
import path from "path";
import { LOG_FOLDER, LOG_FILES } from "./constants";

export class FileManager {
  private logDir: string;

  constructor() {
    this.logDir = path.join(process.cwd(), LOG_FOLDER);
    this.initialize();
  }

  private initialize(): void {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }

    Object.values(LOG_FILES).forEach((file) => {
      const filePath = path.join(this.logDir, file);

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "");
      }
    });
  }

  getFilePath(fileName: string): string {
    return path.join(this.logDir, fileName);
  }
}

export const fileManager = new FileManager();