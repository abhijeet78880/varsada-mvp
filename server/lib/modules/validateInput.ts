import { Request, Response, NextFunction,RequestHandler } from 'express';
import { ZodSchema, ZodError } from 'zod';

export default function validateInput(schema: ZodSchema<any>): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsedInput = schema.safeParse(req.body);

    if (!parsedInput.success) {
      return res.status(400).json({
        msg: 'Invalid Input',
        log: 'Input validation failed',
      });
    }

    req.body = parsedInput.data;
    next();
  };
}
