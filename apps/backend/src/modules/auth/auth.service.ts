import {
    hashPassword,
    comparePassword,
} from "../../core/crypto/bcrypt";

import { JWT } from "../../core/auth";
import { AppError } from "../../core/errors/app-error";

import { AuthRepository } from "./auth.repository";

export class AuthService {
    private repository = new AuthRepository();

    async register(
        username: string,
        password: string,
        role: "user" | "admin"
    ) {
        const exists =
            await this.repository.findByUsername(username);

        if (exists) {
            throw new AppError(
                "Username sudah digunakan",
                400
            );
        }

        const hashedPassword =
            await hashPassword(password);

        const user =
            await this.repository.create({
                username,
                password: hashedPassword,
                role,
            });

        const accessToken =
            JWT.signAccessToken({
                id: user.id,
                username: user.username,
                role: user.role,
            });

        const refreshToken =
            JWT.signRefreshToken({
                id: user.id,
            });

        await this.repository.updateRefreshToken(
            user.id,
            refreshToken
        );

        const {
            password: _,
            refreshToken: __,
            ...safeUser
        } = user;

        return {
            user: safeUser,
            accessToken,
            refreshToken,
        };
    }

    async login(
        username: string,
        password: string
    ) {
        const user =
            await this.repository.findByUsername(username);

        if (!user) {
            throw new AppError(
                "Username atau password salah",
                401
            );
        }

        const valid =
            await comparePassword(
                password,
                user.password
            );

        if (!valid) {
            throw new AppError(
                "Username atau password salah",
                401
            );
        }

        const accessToken =
            JWT.signAccessToken({
                id: user.id,
                username: user.username,
                role: user.role,
            });

        const refreshToken =
            JWT.signRefreshToken({
                id: user.id,
            });

        await this.repository.updateRefreshToken(
            user.id,
            refreshToken
        );

        const {
            password: _,
            refreshToken: __,
            ...safeUser
        } = user;

        return {
            user: safeUser,
            accessToken,
            refreshToken,
        };
    }

    async refresh(refreshToken: string) {
        const payload =
            JWT.verifyRefreshToken(refreshToken);

        const user =
            await this.repository.findById(payload.id);

        if (!user) {
            throw new AppError(
                "User tidak ditemukan",
                401
            );
        }

        if (user.refreshToken !== refreshToken) {
            throw new AppError(
                "Refresh token tidak valid",
                401
            );
        }

        const accessToken =
            JWT.signAccessToken({
                id: user.id,
                username: user.username,
                role: user.role,
            });

        const newRefreshToken =
            JWT.signRefreshToken({
                id: user.id,
            });

        await this.repository.updateRefreshToken(
            user.id,
            newRefreshToken
        );

        return {
            accessToken,
            refreshToken: newRefreshToken,
        };
    }

    async logout(id: number) {
        const user =
            await this.repository.findById(id);

        if (!user) {
            throw new AppError(
                "User tidak ditemukan",
                404
            );
        }

        await this.repository.deleteRefreshToken(id);
    }

    async changePassword(
        id: number,
        oldPassword: string,
        newPassword: string
    ) {
        const user =
            await this.repository.findById(id);

        if (!user) {
            throw new AppError(
                "User tidak ditemukan",
                404
            );
        }

        const valid =
            await comparePassword(
                oldPassword,
                user.password
            );

        if (!valid) {
            throw new AppError(
                "Password lama salah",
                400
            );
        }

        const hashedPassword =
            await hashPassword(newPassword);

        await this.repository.updatePassword(
            id,
            hashedPassword
        );
    }
}
