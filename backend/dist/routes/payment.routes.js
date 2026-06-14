"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
const validate_1 = require("../middlewares/validate");
const validations_1 = require("../validations");
const router = (0, express_1.Router)();
router.post('/create-order', (0, validate_1.validate)(validations_1.createPaymentOrderSchema), payment_controller_1.createPaymentOrder);
router.post('/verify', (0, validate_1.validate)(validations_1.verifyPaymentSchema), payment_controller_1.verifyPayment);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map