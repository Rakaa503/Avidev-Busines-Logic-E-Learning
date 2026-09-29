import type { AVSSPlugin } from "./plugin";

export function loggerPlugin(): AVSSPlugin {
  return {
    name: "Logger",

    setup() {
      console.log("📝 Logger Plugin Loaded");
    },
  };
}