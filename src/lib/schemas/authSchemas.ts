import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(26, "First name must be no more than 26 characters")
    .regex(/^[\p{L}\p{M}' -]+$/u, "Provide a valid first name")
    .trim(),
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(26, "Last name must be no more than 26 characters")
    .regex(/^[\p{L}\p{M}' -]+$/u, "Provide a valid last name")
    .trim(),
  email: z.email("Please enter a valid email").trim(),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]).+$/,
      "Password must include uppercase, lowercase, number, and special character"
    ).trim(),
  confirmPassword: z.string().trim(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const signinSchema = z.object({
  email: z.email("Invalid email").trim(),
  password: z.string(),
});
