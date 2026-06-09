import nodemailer from 'nodemailer';
import { config } from './config';

export const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.port === 465,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  const info = await transporter.sendMail({
    from: config.email.from,
    to,
    subject,
    html,
  });
  return info;
};
