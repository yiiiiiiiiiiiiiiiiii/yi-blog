import IconWechat from "@/components/SvgIcon/Wechat";
import IconEmail from "@/components/SvgIcon/Email";
import IconGithub from "@/components/SvgIcon/Github";

export default function Page() {
  return (
    <div>
      <div className="mb-10">
        <div>title</div>
        <div>subtitle</div>
      </div>
      <div className="flex flex-row justify-between items-start gap-20">
        <div className="w-full flex flex-col items-start">
          <div className="text-5xl font-bold mb-5">Y18i</div>
          <div className="text-lg mb-5">y18i - Next.js Enginee</div>
          <div className="mb-5">
            <div>
              <IconWechat className="w-8 h-8" />
              WeChat
            </div>
            <div>
              <IconEmail className="w-8 h-8" /> <div>Email</div>
            </div>
            <div>
              <IconGithub className="w-8 h-8" /> <div>Github</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start  ">
          <div className="text-xl font-bold mb-5">或者留下一个信息</div>
          <form
            className="w-full max-w-lg"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <div className="flex flex-col mb-5">
              <label className="text-lg" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-lg" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full h-40"
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
  );
}
