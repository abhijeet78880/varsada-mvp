import z from 'zod';

export const signupInput = z.object({
  name: z.string().max(25),
  email: z.string().max(25),
  phone: z.string(),
  password: z.string().min(8),
})

export type SignupParams = z.infer<typeof signupInput>; // for frontend validation

export const loginInput = z.object({
  phone: z.string(),
  password: z.string().min(8),
})

export type LoginParams = z.infer<typeof loginInput>;