"use server";

import transporter from "../mailer";

export default async function sendMessage({
  name,
  email,
  message,
}: Record<string, string>): Promise<{
  success: boolean | undefined;
  message: string;
}> {
  console.log(name, email, message);
  return new Promise((resolve) => {
    transporter.sendMail(
      {
        from: process.env.PROXY_PUB_MAIL,
        to: process.env.RECIVER_MAIL_ADDRESS,
        subject: `y18i blog received a message`,
        text: `姓名: ${name}\n邮箱: ${email}\n${message}`,
      },
      (error, info) => {
        console.log(error, info);
        if (error) {
          // console.error(error, info);
          resolve({
            success: false,
            message: "Failed to send message | 发送失败",
          });
        } else {
          resolve({
            success: true,
            message: "Message sent successfully | 发送成功",
          });
        }
      }
    );
  });
}
