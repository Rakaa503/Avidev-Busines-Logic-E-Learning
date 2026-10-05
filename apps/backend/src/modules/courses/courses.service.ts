import { AppError } from "../../core/errors/app-error";

import {
    CoursesRepository,
} from "./courses.repository";

import type {
    CreateCourseInput,
    UpdateCourseInput,
} from "./courses.schema";

export class CoursesService {
    private readonly repository: CoursesRepository;

    constructor() {
        this.repository = new CoursesRepository();
    }

    async getAll(
        page: number,
        limit: number
    ) {
        const {
            courses,
            total,
        } = await this.repository.findAll(
            page,
            limit
        );

        return {
            data: courses,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(
                    total / limit
                ),
                hasNext:
                    page <
                    Math.ceil(
                        total / limit
                    ),
                hasPrev: page > 1,
            },
        };
    }

    async getById(id: number) {
        const course =
            await this.repository.findById(id);

        if (!course) {
            throw new AppError(
                "Course tidak ditemukan",
                404
            );
        }

        return course;
    }

    async create(
        data: CreateCourseInput
    ) {
        const exists =
            await this.repository.findBySlug(
                data.slug
            );

        if (exists) {
            throw new AppError(
                "Slug course sudah digunakan",
                400
            );
        }

        return this.repository.create({
            title: data.title,
            description: data.description,
            slug: data.slug,
            isPublished: data.isPublished,
        });
    }

    async update(
        id: number,
        data: UpdateCourseInput
    ) {
        const course =
            await this.repository.findById(id);

        if (!course) {
            throw new AppError(
                "Course tidak ditemukan",
                404
            );
        }

        if (
            data.slug &&
            data.slug !== course.slug
        ) {
            const exists =
                await this.repository.findBySlug(
                    data.slug
                );

            if (exists) {
                throw new AppError(
                    "Slug course sudah digunakan",
                    400
                );
            }
        }

        return this.repository.update(
            id,
            data
        );
    }

    async delete(id: number) {
        const course =
            await this.repository.findById(id);

        if (!course) {
            throw new AppError(
                "Course tidak ditemukan",
                404
            );
        }

        await this.repository.delete(id);

        return {
            message: "Course berhasil dihapus",
        };
    }
}
