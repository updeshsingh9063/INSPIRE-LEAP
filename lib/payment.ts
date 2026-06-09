// Razorpay payment link for direct checkout
export const RAZORPAY_PAYMENT_LINK = 'https://rzp.io/rzp/9tayaBb';

export const initiatePayment = (
  courseName: string,
  amount: number
): void => {
  // Open Razorpay payment link in new tab
  window.open(RAZORPAY_PAYMENT_LINK, '_blank');
};
