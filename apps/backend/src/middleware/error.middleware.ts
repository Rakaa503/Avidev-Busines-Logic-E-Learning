import { createMiddleware } from "hono/factory";
import { ZodError } from "zod";

import { AppError } from "../core/errors/app-error";

export const errorMiddleware = createMiddleware(
    async (c, next) => {
        try {
            await next();
        } catch (error) {
            if (error instanceof AppError) {
                return c.json(
                    {
                        success: false,
                        message: error.message,
                        code: error.code,
                    },
                    error.status
                );
            }

            if (error instanceof ZodError) {
                return c.json(
                    {
                        success: false,
                        message: "Validation failed",
                        code: "VALIDATION_ERROR",
                        errors: error.issues,
                    },
                    400
                );
            }

            console.error(error);

            return c.json(
                {
                    success: false,
                    message: "Internal Server Error",
                    code: "INTERNAL_SERVER_ERROR",
                },
                500
            );
        }
    }
);