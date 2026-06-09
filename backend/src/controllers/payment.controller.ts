import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import { config } from '../config/config';
import crypto from 'crypto';

// Initialize Razorpay instance lazily
let razorpay: any = null;

const getRazorpayInstance = () => {
  if (!razorpay) {
    razorpay = new Razorpay({
      key_id: config.razorpay.keyId,
      key_secret: config.razorpay.keySecret,
    });
  }
  return razorpay;
};

export const createPaymentOrder = async (req: Request, res: Response) => {
  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount',
      });
    }

    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    };

    const razorpayInstance = getRazorpayInstance();
    const order = await razorpayInstance.orders.create(options);

    return res.status(200).json({
      success: true,
      order,
      keyId: config.razorpay.keyId,
    });
  } catch (error: any) {
    console.error('Error creating payment order:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create payment order',
      error: error.message,
    });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Missing required payment details',
      });
    }

    // Create HMAC signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', config.razorpay.keySecret)
      .update(sign)
      .digest('hex');

    // Verify signature
    if (razorpay_signature === expectedSignature) {
      // Payment is valid
      return res.status(200).json({
        success: true,
        message: 'Payment verified successfully',
      });
    } else {
      // Payment is invalid
      return res.status(400).json({
        success: false,
        message: 'Invalid payment signature',
      });
    }
  } catch (error: any) {
    console.error('Error verifying payment:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to verify payment',
      error: error.message,
    });
  }
};
