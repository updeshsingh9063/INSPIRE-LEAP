"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enrollment_controller_1 = require("../controllers/enrollment.controller");
const validate_1 = require("../middlewares/validate");
const validations_1 = require("../validations");
const router = (0, express_1.Router)();
router.post('/create', (0, validate_1.validate)(validations_1.createEnrollmentSchema), enrollment_controller_1.createEnrollment);
exports.default = router;
//# sourceMappingURL=enrollment.routes.js.map