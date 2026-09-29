import { audit } from "./audit";

const user = {
  id: "1",
  name: "Raka",
  email: "admin@gmail.com",
  role: "ADMIN",
};

console.log("========== AUDIT FRAMEWORK ==========\n");

audit.login(user);

audit.logout(user);

audit.register(user);

audit.failedLogin("admin@gmail.com");

audit.changePassword(user);

audit.changeRole(user, "USER", "ADMIN");

audit.createUser(user);

audit.updateUser(user);

audit.deleteUser(user);

audit.verifyEmail(user);

audit.resetPassword(user);

console.log("\n✅ Audit Framework Loaded");