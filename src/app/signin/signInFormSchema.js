import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Please enter valid email address." }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters." })
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});
