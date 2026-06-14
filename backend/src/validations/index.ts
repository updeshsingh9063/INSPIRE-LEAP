import { z } from 'zod';

export const createPaymentOrderSchema = z.object({
  body: z.object({
    amount: z.number().positive(),
    currency: z.string().optional().default('INR'),
    receipt: z.string().optional(),
    notes: z.record(z.string(), z.any()).optional(),
  }),
});

export const verifyPaymentSchema = z.object({
  body: z.object({
    razorpay_order_id: z.string(),
    razorpay_payment_id: z.string(),
    razorpay_signature: z.string(),
  }),
});

export const createEnrollmentSchema = z.object({
  body: z.object({
    userId: z.string(),
    courseId: z.union([z.string(), z.number()]),
    courseName: z.string(),
    userName: z.string(),
    userEmail: z.string().email(),
    amount: z.number().nonnegative(),
    paymentId: z.string(),
    orderId: z.string().optional(),
    courseDetails: z.any().optional(),
  }),
});
