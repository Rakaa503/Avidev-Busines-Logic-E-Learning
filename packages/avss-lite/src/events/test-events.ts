import { events } from "./emitter";

console.log("========== EVENT BUS ==========\n");

// Logger
events.on("login", (user) => {
  console.log("📝 LOGGER");
  console.log(`${user.name} logged in`);
  console.log();
});

// Audit
events.on("login", (user) => {
  console.log("📋 AUDIT");
  console.log(`${user.email} LOGIN SUCCESS`);
  console.log();
});

// Plugin
events.on("login", (user) => {
  console.log("🔌 PLUGIN");
  console.log(`Welcome ${user.name}`);
  console.log();
});

// Analytics
events.on("login", (user) => {
  console.log("📊 ANALYTICS");
  console.log(`Tracking login: ${user.id}`);
  console.log();
});

events.emit("login", {
  id: "1",
  name: "Raka",
  email: "admin@gmail.com",
  role: "ADMIN",
});

console.log("Login Listeners :", events.listenerCount("login"));

console.log("\n✅ Event Bus Loaded");