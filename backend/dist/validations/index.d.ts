import { z } from 'zod';
export declare const createPaymentOrderSchema: z.ZodObject<{
    body: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        receipt: z.ZodOptional<z.ZodString>;
        notes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const verifyPaymentSchema: z.ZodObject<{
    body: z.ZodObject<{
        razorpay_order_id: z.ZodString;
        razorpay_payment_id: z.ZodString;
        razorpay_signature: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createEnrollmentSchema: z.ZodObject<{
    body: z.ZodObject<{
        userId: z.ZodString;
        courseId: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        courseName: z.ZodString;
        userName: z.ZodString;
        userEmail: z.ZodString;
        amount: z.ZodNumber;
        paymentId: z.ZodString;
        orderId: z.ZodOptional<z.ZodString>;
        courseDetails: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=index.d.ts.map