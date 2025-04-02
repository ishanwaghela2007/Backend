import nodemailer from "nodemailer";
import dotenv from "dotenv";
import asyncHandler from "./asyncHandler.js";

dotenv.config();

export const sendEmail =asyncHandler( async (name, email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our Service!",
      text: `Hello ${name},\n\nWelcome! We are glad to have you on board.\n\nBest Regards,\nTeam`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${email}: ${info.response}`);
    return info;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
});
