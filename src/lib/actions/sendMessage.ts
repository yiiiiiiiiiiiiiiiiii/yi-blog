"use server";
import transporter from "../mailer";

export default async function sendMessage(formData: FormData) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: process.env.MAIL_ADDRESS,
        to: process.env.RECIVER_MAIL_ADDRESS,
        subject: `y18i blog received a message`,
        text: `姓名: ${formData.get("name")}\n邮箱: ${formData.get(
          "email"
        )}\n${formData.get("message")}`,
      },
      (error, info) => {
        console.log(error, info);
        if (error) {
          reject(error);
        } else {
          resolve(info.response);
        }
      }
    );
  });
}
