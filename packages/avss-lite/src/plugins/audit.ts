import type { AVSSPlugin } from "./plugin";

export function auditPlugin(): AVSSPlugin {
  return {
    name: "Audit",

    setup() {
      console.log("📋 Audit Plugin Loaded");
    },
  };
}