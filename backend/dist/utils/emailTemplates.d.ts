export declare const emailVerifyTemplate: (name: string, verifyUrl: string) => string;
export declare const passwordResetTemplate: (name: string, resetUrl: string) => string;
export declare const welcomeTemplate: (name: string) => string;
export declare const enrollmentNotificationTemplate: (data: {
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
}) => string;
//# sourceMappingURL=emailTemplates.d.ts.map