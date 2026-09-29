import { Hono } from "hono";
import { cors } from "hono/cors";

import routes from "./routes";

import { env } from "./core/config";
import { requestIdMiddleware } from "./middleware/request-id";
import { securityMiddleware } from "./middleware/security.middleware";
import { errorMiddleware } from "./middleware/error.middleware";

import {
    rateLimitMiddleware,
    createRateLimitMiddleware,
} from "./middleware/rate-limit.middleware";

const app = new Hono();

/**
 * Global Error Handler
 */
app.use("*", errorMiddleware);

/**
 * Request ID
 */
app.use("*", requestIdMiddleware);

/**
 * CORS
 */
app.use(
    "*",
    cors({
        origin: env.CORS_ORIGIN,
        credentials: true,
        allowMethods: [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
            "OPTIONS",
        ],
        allowHeaders: [
            "Content-Type",
            "Authorization",
        ],
    })
);

/**
 * Global Rate Limit
 */
app.use("*", rateLimitMiddleware);

/**
 * Login Rate Limit
 */
app.use(
    "/api/v1/auth/login",
    createRateLimitMiddleware({
        enabled: true,
        windowMs: 60_000,
        maxRequests: 5,
    })
);

/**
 * Security Middleware
 */
app.use("*", securityMiddleware);

/**
 * Root
 */
app.get("/", (c) => {
    return c.text(`${env.APP_NAME} API`);
});

/**
 * Health
 */
app.get("/health", (c) => {
    return c.json({
        success: true,
        status: "ok",
        service: env.APP_NAME,
        version: env.APP_VERSION,
        timestamp: new Date().toISOString(),
    });
});

/**
 * API Routes
 */
app.route("/", routes);

export default app;
