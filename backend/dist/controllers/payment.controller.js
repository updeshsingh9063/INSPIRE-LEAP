"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPayment = exports.createPaymentOrder = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const config_1 = require("../config/config");
const crypto_1 = __importDefault(require("crypto"));
let razorpay = null;
const getRazorpayInstance = () => {
    if (!razorpay) {
        razorpay = new razorpay_1.default({
            key_id: config_1.config.razorpay.keyId,
            key_secret: config_1.config.razorpay.keySecret,
        });
    }
    return razorpay;
};
const createPaymentOrder = async (req, res) => {
    try {
        const { amount, currency = 'INR', receipt, notes } = req.body;
        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid amount',
            });
        }
        const options = {
            amount: amount * 100,
            currency,
            receipt: receipt || `receipt_${Date.now()}`,
            notes: notes || {},
        };
        const razorpayInstance = getRazorpayInstance();
        const order = await razorpayInstance.orders.create(options);
        return res.status(200).json({
            success: true,
            order,
            keyId: config_1.config.razorpay.keyId,
        });
    }
    catch (error) {
        console.error('Error creating payment order:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create payment order',
            error: error.message,
        });
    }
};
exports.createPaymentOrder = createPaymentOrder;
const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: 'Missing required payment details',
            });
        }
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSignature = crypto_1.default
            .createHmac('sha256', config_1.config.razorpay.keySecret)
            .update(sign)
            .digest('hex');
        if (razorpay_signature === expectedSignature) {
            return res.status(200).json({
                success: true,
                message: 'Payment verified successfully',
            });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'Invalid payment signature',
            });
        }
    }
    catch (error) {
        console.error('Error verifying payment:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to verify payment',
            error: error.message,
        });
    }
};
exports.verifyPayment = verifyPayment;
//# sourceMappingURL=payment.controller.js.map