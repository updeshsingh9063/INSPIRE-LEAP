import { Router } from 'express';
import { createEnrollment } from '../controllers/enrollment.controller';

const router = Router();

// Create enrollment after payment verification
router.post('/create', createEnrollment);

export default router;
