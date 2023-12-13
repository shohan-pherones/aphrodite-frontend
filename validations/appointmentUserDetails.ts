import z from 'zod';

export const AppointmentUserDetailsSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(32),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10).max(14),
  address: z.string().min(6).max(38),
});

export type AppointmentUserDetailsSchemaType = z.infer<
  typeof AppointmentUserDetailsSchema
>;
