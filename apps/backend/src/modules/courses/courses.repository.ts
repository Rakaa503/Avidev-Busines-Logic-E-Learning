import { prisma } from "../../core/database/prisma";

export interface CreateCourseData {
    title: string;
    description?: string;
    slug: string;
    isPublished: boolean;
}

export interface UpdateCourseData {
    title?: string;
    description?: string;
    slug?: string;
    isPublished?: boolean;
}

export class CoursesRepository {
    async findAll(
        page: number,
        limit: number
    ) {
        const skip = (page - 1) * limit;

        const [courses, total] =
            await Promise.all([
                prisma.course.findMany({
                    skip,
                    take: limit,
                    orderBy: {
                        id: "desc",
                    },
                }),
                prisma.course.count(),
            ]);

        return {
            courses,
            total,
        };
    }

    async findById(id: number) {
        return prisma.course.findUnique({
            where: {
                id,
            },
        });
    }

    async findBySlug(slug: string) {
        return prisma.course.findUnique({
            where: {
                slug,
            },
        });
    }

    async create(data: CreateCourseData) {
        return prisma.course.create({
            data,
        });
    }

    async update(
        id: number,
        data: UpdateCourseData
    ) {
        return prisma.course.update({
            where: {
                id,
            },
            data,
        });
    }

    async delete(id: number) {
        return prisma.course.delete({
            where: {
                id,
            },
        });
    }
}

export const coursesRepository =
    new CoursesRepository();
