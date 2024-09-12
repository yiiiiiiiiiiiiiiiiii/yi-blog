import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_USER_PASSWORD,
  },
});

export default transporter;
