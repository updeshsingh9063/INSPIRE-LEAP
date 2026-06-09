# Inspire Leap Backend API

Backend API for Inspire Leap - Premium EdTech Platform with Razorpay payment gateway and email notifications.

## Features

- **Payment Gateway Integration**: Razorpay for secure payment processing
- **Email Notifications**: Automated admin notifications for course enrollments
- **Course Enrollment**: Complete enrollment flow with payment verification
- **Database**: PostgreSQL with Prisma ORM
- **Security**: Helmet, CORS, rate limiting, JWT authentication
- **Logging**: Winston for structured logging

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Payment**: Razorpay
- **Email**: Nodemailer with SMTP
- **Security**: Helmet, CORS, express-rate-limit
- **Authentication**: JWT

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and configure the following variables:

```bash
# Server
PORT=5000
NODE_ENV=development

# Database (PostgreSQL)
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/inspireleap?schema=public"

# JWT Secrets
JWT_ACCESS_SECRET=your_super_secret_access_key_here_change_in_production
JWT_REFRESH_SECRET=your_super_secret_refresh_key_here_change_in_production
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Email (SMTP - e.g. Gmail, SendGrid)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM="Inspire Leap <noreply@inspireleap.com>"
ADMIN_EMAIL=admin@inspireleap.com

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Frontend URL (for CORS and email links)
FRONTEND_URL=http://localhost:3000
```

### 3. Database Setup

Generate Prisma Client:
```bash
npm run prisma:generate
```

Run database migrations:
```bash
npm run prisma:migrate
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Payment Endpoints

#### Create Payment Order
```http
POST /api/payment/create-order
Content-Type: application/json

{
  "amount": 9999,
  "currency": "INR",
  "receipt": "receipt_123456",
  "notes": {
    "courseId": "course_123",
    "userId": "user_456"
  }
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "order_123456789",
    "entity": "order",
    "amount": 999900,
    "currency": "INR",
    "receipt": "receipt_123456"
  },
  "keyId": "rzp_test_123456789"
}
```

#### Verify Payment
```http
POST /api/payment/verify
Content-Type: application/json

{
  "razorpay_order_id": "order_123456789",
  "razorpay_payment_id": "pay_123456789",
  "razorpay_signature": "signature_hash"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified successfully"
}
```

### Enrollment Endpoints

#### Create Enrollment
```http
POST /api/enrollment/create
Content-Type: application/json

{
  "userId": "user_456",
  "courseId": "course_123",
  "courseName": "Full Stack Development",
  "userName": "John Doe",
  "userEmail": "john@example.com",
  "amount": 9999,
  "paymentId": "pay_123456789",
  "orderId": "order_123456789",
  "courseDetails": {
    "duration": "12 weeks",
    "category": "Web Development"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enrollment created successfully and admin notified",
  "data": {
    "userId": "user_456",
    "courseId": "course_123",
    "paymentId": "pay_123456789",
    "orderId": "order_123456789",
    "enrollmentDate": "2026-06-09T10:30:00.000Z"
  }
}
```

### Health Check

```http
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "message": "Inspire Leap Backend API"
}
```

## Email Templates

The backend includes the following email templates:

1. **Email Verification** - For user email verification
2. **Password Reset** - For password reset requests
3. **Welcome Email** - Sent to new users after registration
4. **Enrollment Notification** - Sent to admin when a user enrolls in a course

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message (in development mode)"
}
```

## Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **JWT Authentication**: Secure token-based authentication
- **Environment Variables**: Sensitive data stored in environment variables

## Development Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript to JavaScript
npm start            # Start production server
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate    # Run database migrations
```

## Production Deployment

1. Set `NODE_ENV=production` in environment variables
2. Use strong JWT secrets
3. Configure production database URL
4. Set up production SMTP server
5. Use production Razorpay API keys
6. Build the project: `npm run build`
7. Start the server: `npm start`

## Database Schema

The application uses Prisma ORM with PostgreSQL. The schema includes:

- Users (students, mentors, admins)
- Courses
- Enrollments
- Reviews
- Mentors
- Mentor Sessions
- Certifications
- Internships
- Applications
- FAQs
- Contact Messages
- Newsletters
- Placement Stats
- Success Stories

See `prisma/schema.prisma` for the complete schema.

## Troubleshooting

### Prisma Client Generation Issues
If you encounter Prisma client generation errors:
```bash
npm run prisma:generate
```

### Database Connection Issues
Ensure your PostgreSQL database is running and the `DATABASE_URL` is correct.

### Email Sending Issues
Verify SMTP credentials and ensure your email provider allows SMTP access.

### Razorpay Integration Issues
Ensure your Razorpay API keys are correct and your account is active.

## Support

For issues and questions, please contact the development team.
