import { Hono } from "hono";

import {
    CoursesController,
} from "./courses.controller";

import { authMiddleware } from "../../middleware/auth.middleware";

import {
    roleMiddleware,
} from "../../middleware/role.middleware";

const courses = new Hono();

const controller =
    new CoursesController();

courses.use(
    "*",
    authMiddleware
);

courses.get(
    "/",
    roleMiddleware(
        "admin",
        "superadmin"
    ),
    (c) => controller.index(c)
);

courses.get(
    "/:id",
    roleMiddleware(
        "admin",
        "superadmin"
    ),
    (c) => controller.show(c)
);

courses.post(
    "/",
    roleMiddleware(
        "admin",
        "superadmin"
    ),
    (c) => controller.store(c)
);

courses.patch(
    "/:id",
    roleMiddleware(
        "admin",
        "superadmin"
    ),
    (c) => controller.update(c)
);

courses.delete(
    "/:id",
    roleMiddleware("superadmin"),
    (c) => controller.destroy(c)
);

export default courses;
