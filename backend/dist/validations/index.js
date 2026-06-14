"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnrollmentSchema = exports.verifyPaymentSchema = exports.createPaymentOrderSchema = void 0;
const zod_1 = require("zod");
exports.createPaymentOrderSchema = zod_1.z.object({
    body: zod_1.z.object({
        amount: zod_1.z.number().positive(),
        currency: zod_1.z.string().optional().default('INR'),
        receipt: zod_1.z.string().optional(),
        notes: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    }),
});
exports.verifyPaymentSchema = zod_1.z.object({
    body: zod_1.z.object({
        razorpay_order_id: zod_1.z.string(),
        razorpay_payment_id: zod_1.z.string(),
        razorpay_signature: zod_1.z.string(),
    }),
});
exports.createEnrollmentSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        courseId: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
        courseName: zod_1.z.string(),
        userName: zod_1.z.string(),
        userEmail: zod_1.z.string().email(),
        amount: zod_1.z.number().nonnegative(),
        paymentId: zod_1.z.string(),
        orderId: zod_1.z.string().optional(),
        courseDetails: zod_1.z.any().optional(),
    }),
});
//# sourceMappingURL=index.js.map