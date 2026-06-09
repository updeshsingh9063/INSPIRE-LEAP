import { config } from '../config/config';

export const emailVerifyTemplate = (name: string, verifyUrl: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Verify Your Email</title></head>
<body style="font-family: Arial, sans-serif; background: #0a0a0a; color: #fff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: #1a1a2e; border-radius: 16px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 40px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; color: white;">Inspire Leap</h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8);">Wipro Partner Program</p>
    </div>
    <div style="padding: 40px;">
      <h2 style="color: #a78bfa; margin-top: 0;">Verify Your Email Address</h2>
      <p style="color: #cbd5e1; line-height: 1.6;">Hi ${name},</p>
      <p style="color: #cbd5e1; line-height: 1.6;">
        Welcome to Inspire Leap! Please verify your email address to get started 
        on your learning journey.
      </p>
      <div style="text-align: center; margin: 32px 0;">
        <a href="${verifyUrl}" style="
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
        ">Verify Email Address</a>
      </div>
      <p style="color: #94a3b8; font-size: 14px;">
        If you didn't create an account, you can safely ignore this email.
        This link expires in 24 hours.
      </p>
      <hr style="border: 1px solid #334155; margin: 24px 0;">
      <p style="color: #64748b; font-size: 12px; text-align: center;">
        © ${new Date().getFullYear()} Inspire Leap. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
`;

export const passwordResetTemplate = (name: string, resetUrl: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Reset Your Password</title></head>
<body style="font-family: Arial, sans-serif; background: #0a0a0a; color: #fff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: #1a1a2e; border-radius: 16px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 40px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; color: white;">Inspire Leap</h1>
    </div>
    <div style="padding: 40px;">
      <h2 style="color: #a78bfa; margin-top: 0;">Reset Your Password</h2>
      <p style="color: #cbd5e1;">Hi ${name},</p>
      <p style="color: #cbd5e1; line-height: 1.6;">
        We received a request to reset your password. Click the button below to create a new password.
      </p>
      <div style="text-align: center; margin: 32px 0;">
        <a href="${resetUrl}" style="
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
        ">Reset Password</a>
      </div>
      <p style="color: #94a3b8; font-size: 14px;">
        If you didn't request a password reset, please ignore this email or contact support. 
        This link expires in 1 hour.
      </p>
    </div>
  </div>
</body>
</html>
`;

export const welcomeTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Welcome to Inspire Leap!</title></head>
<body style="font-family: Arial, sans-serif; background: #0a0a0a; color: #fff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: #1a1a2e; border-radius: 16px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 40px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; color: white;">Welcome to Inspire Leap!</h1>
    </div>
    <div style="padding: 40px;">
      <h2 style="color: #a78bfa;">Hi ${name}, you're in! 🎉</h2>
      <p style="color: #cbd5e1; line-height: 1.6;">
        You've successfully joined the Inspire Leap community — India's premier Wipro Partner 
        Program for tech education and career transformation.
      </p>
      <p style="color: #cbd5e1; line-height: 1.6;">Here's what you can do next:</p>
      <ul style="color: #cbd5e1; line-height: 2;">
        <li>Browse our premium courses</li>
        <li>Connect with industry mentors</li>
        <li>Start your placement journey</li>
        <li>Earn industry certifications</li>
      </ul>
      <div style="text-align: center; margin: 32px 0;">
        <a href="${config.frontend.url}/courses" style="
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
        ">Explore Courses</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const enrollmentNotificationTemplate = (data: {
  userName: string;
  userEmail: string;
  userId: string;
  courseName: string;
  courseId: string;
  amount: number;
  paymentId: string;
  orderId: string;
  courseDetails?: any;
  timestamp: string;
}) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Course Enrollment</title></head>
<body style="font-family: Arial, sans-serif; background: #0a0a0a; color: #fff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: #1a1a2e; border-radius: 16px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 40px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; color: white;">New Course Enrollment</h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8);">Inspire Leap Admin Notification</p>
    </div>
    <div style="padding: 40px;">
      <h2 style="color: #a78bfa; margin-top: 0;">Enrollment Details</h2>
      
      <div style="background: #0f0f1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ec4899; margin-top: 0;">Student Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; color: #94a3b8; width: 40%;">Name:</td>
            <td style="padding: 8px; color: #cbd5e1; font-weight: bold;">${data.userName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Email:</td>
            <td style="padding: 8px; color: #cbd5e1;">${data.userEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">User ID:</td>
            <td style="padding: 8px; color: #cbd5e1; font-family: monospace;">${data.userId}</td>
          </tr>
        </table>
      </div>

      <div style="background: #0f0f1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ec4899; margin-top: 0;">Course Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; color: #94a3b8; width: 40%;">Course Name:</td>
            <td style="padding: 8px; color: #cbd5e1; font-weight: bold;">${data.courseName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Course ID:</td>
            <td style="padding: 8px; color: #cbd5e1; font-family: monospace;">${data.courseId}</td>
          </tr>
          ${data.courseDetails ? `
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Duration:</td>
            <td style="padding: 8px; color: #cbd5e1;">${data.courseDetails.duration || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Category:</td>
            <td style="padding: 8px; color: #cbd5e1;">${data.courseDetails.category || 'N/A'}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <div style="background: #0f0f1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ec4899; margin-top: 0;">Payment Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; color: #94a3b8; width: 40%;">Amount:</td>
            <td style="padding: 8px; color: #10b981; font-weight: bold; font-size: 18px;">₹${data.amount}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Payment ID:</td>
            <td style="padding: 8px; color: #cbd5e1; font-family: monospace;">${data.paymentId}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Order ID:</td>
            <td style="padding: 8px; color: #cbd5e1; font-family: monospace;">${data.orderId}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #94a3b8;">Timestamp:</td>
            <td style="padding: 8px; color: #cbd5e1;">${data.timestamp}</td>
          </tr>
        </table>
      </div>

      <div style="text-align: center; margin: 32px 0;">
        <a href="${config.frontend.url}/admin/enrollments" style="
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
        ">View in Admin Dashboard</a>
      </div>
      
      <p style="color: #94a3b8; font-size: 14px; margin-top: 32px;">
        This is an automated notification. Please verify the enrollment details in your admin dashboard.
      </p>
    </div>
    <div style="background: #0f0f1a; padding: 20px; text-align: center; border-top: 1px solid #334155;">
      <p style="color: #64748b; font-size: 12px; margin: 0;">
        © ${new Date().getFullYear()} Inspire Leap. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
`;
