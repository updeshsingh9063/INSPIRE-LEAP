"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnrollment = void 0;
const email_1 = require("../config/email");
const config_1 = require("../config/config");
const emailTemplates_1 = require("../utils/emailTemplates");
const createEnrollment = async (req, res) => {
    try {
        const { userId, courseId, courseName, userName, userEmail, amount, paymentId, orderId, courseDetails } = req.body;
        if (!userId || !courseId || !userName || !userEmail || !paymentId) {
            return res.status(400).json({
                success: false,
                message: 'Missing required enrollment details',
            });
        }
        const adminEmailHtml = (0, emailTemplates_1.enrollmentNotificationTemplate)({
            userName,
            userEmail,
            userId,
            courseName,
            courseId,
            amount,
            paymentId,
            orderId,
            courseDetails,
            timestamp: new Date().toISOString(),
        });
        await (0, email_1.sendEmail)(config_1.config.email.adminEmail, `New Course Enrollment - ${userName} - ${courseName}`, adminEmailHtml);
        return res.status(200).json({
            success: true,
            message: 'Enrollment created successfully and admin notified',
            data: {
                userId,
                courseId,
                paymentId,
                orderId,
                enrollmentDate: new Date(),
            },
        });
    }
    catch (error) {
        console.error('Error creating enrollment:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create enrollment',
            error: error.message,
        });
    }
};
exports.createEnrollment = createEnrollment;
//# sourceMappingURL=enrollment.controller.js.map