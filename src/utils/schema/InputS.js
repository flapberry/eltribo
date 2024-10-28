import { z } from 'zod';

export const ProdEnqSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	mail: z.string().email('Invaild Mail Address'),
	phno: z.preprocess(
    (value) => value === '' || value === null ? undefined : Number(value),
    z.number({
      required_error: 'Phone number is required', 
    })
    .min(1000000000, 'Invalid Phone Number')
    .max(9999999999, 'Invalid Phone Number')
    .nonnegative('Phone number cannot be negative')
  ),
	message: z.string().min(50, 'Message Should be at least 50 characters'),
	size: z.string(1, 'Size is Required')
});