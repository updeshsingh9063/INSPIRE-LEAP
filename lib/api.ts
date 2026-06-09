const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const api = {
  // Payment endpoints
  payment: {
    createOrder: async (amount: number, currency: string = 'INR', receipt?: string, notes?: any) => {
      const response = await fetch(`${API_BASE_URL}/payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency, receipt, notes }),
      });
      return response.json();
    },

    verifyPayment: async (razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string) => {
      const response = await fetch(`${API_BASE_URL}/payment/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ razorpay_order_id, razorpay_payment_id, razorpay_signature }),
      });
      return response.json();
    },
  },

  // Enrollment endpoints
  enrollment: {
    create: async (data: {
      userId: string;
      courseId: string;
      courseName: string;
      userName: string;
      userEmail: string;
      amount: number;
      paymentId: string;
      orderId: string;
      courseDetails?: any;
    }) => {
      const response = await fetch(`${API_BASE_URL}/enrollment/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  },

  // Health check
  health: async () => {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`);
    return response.json();
  },
};
