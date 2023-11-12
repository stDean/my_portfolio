import nodemailer from "nodemailer";

const { EMAIL, EMAIL_PASS } = process.env;

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
};
