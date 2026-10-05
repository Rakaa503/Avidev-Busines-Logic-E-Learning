import type { Context } from "hono";

import {
    CoursesService,
} from "./courses.service";

import {
    CreateCourseSchema,
    UpdateCourseSchema,
} from "./courses.schema";

export class CoursesController {
    private readonly service: CoursesService;

    constructor() {
        this.service = new CoursesService();
    }

    async index(c: Context) {
        const page = Number(
            c.req.query("page") ?? 1
        );

        const limit = Number(
            c.req.query("limit") ?? 10
        );

        const courses =
            await this.service.getAll(
                page,
                limit
            );

        return c.json(courses);
    }

    async show(c: Context) {
        const id = Number(
            c.req.param("id")
        );

        const course =
            await this.service.getById(id);

        return c.json(course);
    }

    async store(c: Context) {
        const body = await c.req.json();

        const data =
            CreateCourseSchema.parse(body);

        const course =
            await this.service.create(data);

        return c.json(course, 201);
    }

    async update(c: Context) {
        const id = Number(
            c.req.param("id")
        );

        const body = await c.req.json();

        const data =
            UpdateCourseSchema.parse(body);

        const course =
            await this.service.update(
                id,
                data
            );

        return c.json(course);
    }

    async destroy(c: Context) {
        const id = Number(
            c.req.param("id")
        );

        const result =
            await this.service.delete(id);

        return c.json(result);
    }
}
