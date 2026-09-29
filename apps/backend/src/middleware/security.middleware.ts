import type { MiddlewareHandler } from "hono";
import { createSecurity } from "avss-lite-Raka503";

const security = createSecurity();

export const securityMiddleware: MiddlewareHandler = async (
    c,
    next
) => {
    /**
     * Security Headers
     */
    const headers = security.headers
        .builder()
        .build();

    for (const [key, value] of Object.entries(headers)) {
        c.header(key, value);
    }

    /**
     * CORS
     *
     * CORS is handled by hono/cors in app.ts.
     * Do not set CORS headers here to avoid conflicts.
     */

    /**
     * Trusted Proxy
     */
    const proxy = security.proxy.info({
        "x-forwarded-for": c.req.header("x-forwarded-for"),
        "x-forwarded-host": c.req.header("x-forwarded-host"),
        "x-forwarded-proto": c.req.header("x-forwarded-proto"),
    });

    c.set("clientIp", proxy.clientIp);

    c.set(
        "trustedProxy",
        security.proxy.trusted(proxy.clientIp)
    );

    /**
     * CSRF
     *
     * Enable later when the frontend integration
     * and CSRF flow are ready.
     */

    await next();
};