import { doctor } from "./doctor";

doctor.check("ENV", true);
doctor.check("VALIDATION", true);
doctor.check("PASSWORD", true);
doctor.check("CONFIG", true);
doctor.check("AUTH", true);
doctor.check("SESSION", true);
doctor.check("ADAPTER", true);
doctor.check("ROLES", true);
doctor.check("MIDDLEWARE", true);
doctor.check("LOGGER", true);
doctor.check("ERROR", true);
doctor.check("AUDIT", true);

doctor.render();