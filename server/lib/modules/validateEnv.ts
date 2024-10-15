import { z } from 'zod';
import dotenv from 'dotenv'
dotenv.config()

const envSchema = z.object({
  SECRET: z.string().nonempty('SECRET must be provided'),
});

const env = envSchema.parse(process.env);

export const SECRET = env.SECRET;
