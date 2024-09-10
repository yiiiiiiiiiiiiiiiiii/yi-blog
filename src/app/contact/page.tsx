import IconWechat from "@/components/SvgIcon/Wechat";
import IconEmail from "@/components/SvgIcon/Email";
import IconGithub from "@/components/SvgIcon/Github";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start  gap-20 mt-20">
      <div className="mt-4 mb-5 gap-y-8 w-full flex flex-col items-start">
        <div className="mb-5">
          <div className="text-xl font-medium mb-2">联系方式</div>
          <div className="text-xl font-medium mb-6">Contact</div>
          <div className="mb-3">
            可以通过以下的联系方式联系我，或者留下你的信息
          </div>
          <div className="">
            You can contact me through the following contact information or
            leave your message
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <IconEmail className="w-6 h-6" />
          <div className="font-medium">yiiiii2020@163.com</div>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <IconGithub className="w-6 h-6" />
          <div className="font-medium">yiiiii2020@163.com</div>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <IconWechat className="w-6 h-6" />
          <div className="font-medium">Wechat:ZY18i</div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start  ">
        <form
          className="w-full max-w-lg"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="flex flex-col mb-5">
            <label className="text-lg font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-gray-300 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-medium  mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-gray-300 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-medium  mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border-2 border-gray-300 px-4 py-2 w-full h-40"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
