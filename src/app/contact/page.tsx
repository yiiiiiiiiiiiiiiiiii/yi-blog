import IconWechat from "@/components/SvgIcon/Wechat";
import IconEmail from "@/components/SvgIcon/Email";
import IconGithub from "@/components/SvgIcon/Github";

export default function Page() {
  return (
    <div className="flex flex-col justify-between items-start gap-20">
      <div className="mb-5 gap-y-8 w-full">
        <div className="mb-10">
          <div className="mb-6">
            <div className="text-3xl font-bold mb-10">Contact Me 联系我</div>
          </div>
          <div className="">
            <div className="mb-3">
              You can contact me through the following contact information or
              leave your message
            </div>
            <div className="">
              可以通过以下的联系方式联系我，或者留下你的信息
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="flex-1 flex-col justify-start items-start ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <IconEmail className="w-6 h-6" />
              <div className="text-lg">yiiiii2020@163.com</div>
            </div>
            <div className="flex flex-row items-center gap-3 mb-5">
              <IconGithub className="w-6 h-6" />
              <div className="text-lg">yiiiii2020@163.com</div>
            </div>
            <div className="flex flex-row items-center gap-3 mb-5">
              <IconWechat className="w-6 h-6" />
              <div className="text-lg">Wechat:ZY18i</div>
            </div>
          </div>
          <div className="flex-1 w-full flex flex-col items-start  ">
            <form
              className="w-full"
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
                  className="border-2 border-gray-300 px-2 py-1 w-full"
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
                  className="border-2 border-gray-300 px-2 py-1 w-full"
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
                  className="border-2 border-gray-300 px-2 py-1 w-full h-40"
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
      </div>
    </div>
  );
}
