import z from 'zod';

export const signupInput = z.object({
  name: z.string().max(25),
  email: z.string().max(25),
  phone: z.number().max(10),
  password: z.string().min(8),
})

export type SignupParams = z.infer<typeof signupInput>;