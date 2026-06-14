import { Router } from 'express';
import { createPaymentOrder, verifyPayment } from '../controllers/payment.controller';
import { validate } from '../middlewares/validate';
import { createPaymentOrderSchema, verifyPaymentSchema } from '../validations';

const router = Router();

// Create payment order
router.post('/create-order', validate(createPaymentOrderSchema), createPaymentOrder);

// Verify payment
router.post('/verify', validate(verifyPaymentSchema), verifyPayment);

export default router;
