import type { Context } from "hono";
import {
    deleteCookie,
    getCookie,
    setCookie,
} from "hono/cookie";

import { AuthService } from "./auth.service";

import {
    ChangePasswordSchema,
    LoginSchema,
    RegisterSchema,
} from "./auth.schema";

export class AuthController {
    private readonly service = new AuthService();

    async register(c: Context) {
        const body = await c.req.json();

        console.log("====================================");
        console.log("REGISTER REQUEST");
        console.log("====================================");
        console.log("[REGISTER] BODY:", body);

        const data = RegisterSchema.parse(body);

        const result = await this.service.register(
            data.username,
            data.password,
            data.role
        );

        setCookie(c, "refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        console.log("[REGISTER] ROLE:", result.user.role);

        return c.json(
            {
                user: result.user,
                accessToken: result.accessToken,
            },
            201
        );
    }

    async login(c: Context) {
        const body = await c.req.json();

        const data = LoginSchema.parse(body);

        const result = await this.service.login(
            data.username,
            data.password
        );

        setCookie(c, "refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return c.json({
            user: result.user,
            accessToken: result.accessToken,
        });
    }

    async refresh(c: Context) {
        const refreshToken = getCookie(c, "refreshToken");

        if (!refreshToken) {
            return c.json(
                {
                    success: false,
                    message: "Refresh token tidak ditemukan",
                },
                401
            );
        }

        const result = await this.service.refresh(refreshToken);

        setCookie(c, "refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return c.json({
            accessToken: result.accessToken,
        });
    }

    async logout(c: Context) {
        const user = c.get("user");

        await this.service.logout(user.id);

        deleteCookie(c, "refreshToken", {
            path: "/",
        });

        return c.json({
            success: true,
            message: "Logout berhasil",
        });
    }

    async me(c: Context) {
        const user = c.get("user");

        return c.json({
            user,
        });
    }

    async changePassword(c: Context) {
        const user = c.get("user");

        const body = await c.req.json();

        const data = ChangePasswordSchema.parse(body);

        await this.service.changePassword(
            user.id,
            data.oldPassword,
            data.newPassword
        );

        return c.json({
            success: true,
            message: "Password berhasil diubah",
        });
    }
}
