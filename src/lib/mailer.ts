import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.PROXY_PUB_MAIL,
    pass: process.env.PROXY_PUB_MAIL_PASSWORD,
  },
});

export default transporter;
