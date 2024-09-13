"use server";

import transporter from "../mailer";

export default async function sendMessage(
  previousState: any,
  formData: FormData
): Promise<{ error: Error | null; message: string }> {
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
        if (error) {
          console.error(error, info);
          reject({
            error: error,
            message: "Failed to send message | 发送失败",
          });
        } else {
          resolve({
            error: null,
            message: "Message sent successfully | 发送成功",
          });
        }
      }
    );
  });
}
