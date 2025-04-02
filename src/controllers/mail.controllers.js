import { sendEmail } from "../utils/mailer.utils.js";
import { Email } from "../models/Email.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const sendPersonalizedEmail =asyncHandler( async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }


    const newEmail = new Email({ name, email, status: "pending" });
    await newEmail.save();

    await sendEmail(name, email);


    newEmail.status = "sent";
    await newEmail.save();

    res.status(200).json({ message: `Email sent to ${name} (${email})!` });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });

    await Email.findOneAndUpdate({ email: req.body.email }, { status: "failed" });
  }
});
