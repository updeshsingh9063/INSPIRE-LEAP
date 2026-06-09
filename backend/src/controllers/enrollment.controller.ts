import { Request, Response } from 'express';
import { sendEmail } from '../config/email';
import { config } from '../config/config';
import { enrollmentNotificationTemplate } from '../utils/emailTemplates';

export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const { 
      userId, 
      courseId, 
      courseName, 
      userName, 
      userEmail, 
      amount, 
      paymentId, 
      orderId,
      courseDetails 
    } = req.body;

    if (!userId || !courseId || !userName || !userEmail || !paymentId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required enrollment details',
      });
    }

    // Send email to admin with complete enrollment data
    const adminEmailHtml = enrollmentNotificationTemplate({
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

    await sendEmail(
      config.email.adminEmail,
      `New Course Enrollment - ${userName} - ${courseName}`,
      adminEmailHtml
    );

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
  } catch (error: any) {
    console.error('Error creating enrollment:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create enrollment',
      error: error.message,
    });
  }
};
