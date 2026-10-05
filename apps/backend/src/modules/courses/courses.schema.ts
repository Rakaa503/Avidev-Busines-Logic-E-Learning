import { z } from "zod";

export const CreateCourseSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Judul course minimal 3 karakter")
        .max(150, "Judul course maksimal 150 karakter"),

    description: z
        .string()
        .trim()
        .max(5000, "Deskripsi maksimal 5000 karakter")
        .optional(),

    slug: z
        .string()
        .trim()
        .min(3, "Slug minimal 3 karakter")
        .max(150, "Slug maksimal 150 karakter")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug hanya boleh menggunakan huruf kecil, angka, dan tanda -"
        ),

    isPublished: z
        .boolean()
        .default(false),
});

export const UpdateCourseSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Judul course minimal 3 karakter")
        .max(150, "Judul course maksimal 150 karakter")
        .optional(),

    description: z
        .string()
        .trim()
        .max(5000, "Deskripsi maksimal 5000 karakter")
        .optional(),

    slug: z
        .string()
        .trim()
        .min(3, "Slug minimal 3 karakter")
        .max(150, "Slug maksimal 150 karakter")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug hanya boleh menggunakan huruf kecil, angka, dan tanda -"
        )
        .optional(),

    isPublished: z
        .boolean()
        .optional(),
});

export type CreateCourseInput =
    z.infer<typeof CreateCourseSchema>;

export type UpdateCourseInput =
    z.infer<typeof UpdateCourseSchema>;
