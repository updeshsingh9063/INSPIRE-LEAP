import { Router } from 'express';
import { createPaymentOrder, verifyPayment } from '../controllers/payment.controller';

const router = Router();

// Create payment order
router.post('/create-order', createPaymentOrder);

// Verify payment
router.post('/verify', verifyPayment);

export default router;
