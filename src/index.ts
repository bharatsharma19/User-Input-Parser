import { z } from "zod";

// Sign-up input validation schema
export const signUpInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .regex(/^\S*$/, { message: "Username must not contain spaces." })
    .optional(), // Now optional after all validations
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  contact: z
    .string()
    .regex(/^\d{10}$/, { message: "Contact must be a valid 10-digit number." }) // regex validation for 10-digit number
    .optional(), // Now optional after the regex validation
});

// Type inferred from signUpInput schema
export type SignUpType = z.infer<typeof signUpInput>;

// Sign-in input validation schema
export const signInInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

// Type inferred from signInInput schema
export type SignInType = z.infer<typeof signInInput>;

// Update user input validation schema
export const updateUserInput = z.object({
  userId: z.string().uuid(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .regex(/^\S*$/, { message: "Username must not contain spaces." })
    .optional(), // Now optional after the regex validation
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .optional(),
  contact: z
    .string()
    .regex(/^\d{10}$/, { message: "Contact must be a valid 10-digit number." }) // regex validation for 10-digit number
    .optional(), // Now optional after the regex validation
});

// Type inferred from updateUserInput schema
export type UpdateUserType = z.infer<typeof updateUserInput>;

// Delete user input validation schema
export const deleteUserType = z.object({
  userId: z.string().uuid(),
});

// Type inferred from deleteUserType schema
export type DeleteUserType = z.infer<typeof deleteUserType>;
