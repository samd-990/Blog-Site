import z from "zod";

export const loginBody = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(5, "Username must be at least 5 characters long"),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, "Password must be at least 5 characters long"),
});
