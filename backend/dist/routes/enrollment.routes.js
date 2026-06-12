"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enrollment_controller_1 = require("../controllers/enrollment.controller");
const router = (0, express_1.Router)();
router.post('/create', enrollment_controller_1.createEnrollment);
exports.default = router;
//# sourceMappingURL=enrollment.routes.js.map