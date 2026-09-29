import { ZodType } from "zod";

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: string[];
}

export function validate<T>(
  schema: ZodType<T>,
  input: unknown
): ValidationResult<T> {
  const result = schema.safeParse(input);

  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  return {
    success: false,
    errors: result.error.issues.map(
      (issue) => issue.message
    ),
  };
}

export function validateOrThrow<T>(
  schema: ZodType<T>,
  input: unknown
): T {
  return schema.parse(input);
}