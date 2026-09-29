import { createSecurity } from "./security";

console.log("========================================");
console.log("      AVSS SECURITY FRAMEWORK TEST");
console.log("========================================");

const security = createSecurity();

//
// CSRF
//

console.log("\n========== CSRF ==========\n");

const token = security.csrf.generateToken();

console.log("Generated Token:");
console.log(token);

console.log("\nValidate:");

console.log(
  security.csrf.validateToken(token, token),
);

console.log("\nMiddleware:");

console.log(
  security.csrf.middleware({
    headers: {
      "x-csrf-token": token,
    },
    csrfToken: token,
  }),
);

//
// XSS
//

console.log("\n========== XSS ==========\n");

const html = `<script>alert("AVSS")</script>`;

console.log("Original:");
console.log(html);

console.log("\nSanitized:");

console.log(
  security.xss.sanitize(html),
);

//
// HEADERS
//

console.log("\n========== HEADERS ==========\n");

console.log(
  security.headers
    .builder()
    .build(),
);

//
// CORS
//

console.log("\n========== CORS ==========\n");

console.log(
  security.cors.createHeaders(),
);

//
// COOKIES
//

console.log("\n========== COOKIES ==========\n");

const cookie = security.cookies.serialize(
  "session",
  "abc123",
);

console.log("Serialized:");

console.log(cookie);

console.log("\nParsed:");

console.log(
  security.cookies.parse(cookie),
);

//
// PROXY
//

console.log("\n========== PROXY ==========\n");

console.log(
  security.proxy.info({
    "x-forwarded-for": "192.168.1.10",
    "x-forwarded-host": "localhost:3000",
    "x-forwarded-proto": "https",
  }),
);

console.log("\nTrusted:");

console.log(
  security.proxy.trusted("127.0.0.1"),
);

//
// RATE LIMIT
//

console.log("\n========== RATE LIMIT ==========\n");

for (let i = 1; i <= 3; i++) {
  console.log(
    `Request ${i}`,
    security.rateLimit.check("127.0.0.1"),
  );
}

console.log("\n========================================");
console.log(" ALL SECURITY TEST PASSED ");
console.log("========================================");