import { Router } from 'express';
import { createEnrollment } from '../controllers/enrollment.controller';
import { validate } from '../middlewares/validate';
import { createEnrollmentSchema } from '../validations';

const router = Router();

// Create enrollment after payment verification
router.post('/create', validate(createEnrollmentSchema), createEnrollment);

export default router;
