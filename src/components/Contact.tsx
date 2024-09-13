import MajorButton from "@/components/MajorButton";

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-start items-center mb-24 mt-8 lg:mt-12 text-center">
      <div className="w-full mx-auto mb-10 text-center font-bold">
        Contact information | 联系方式
      </div>
      <div className="dark:text-gray-400 text-gray-700 mb-12">
        <div className="">
          Any question is welcome to contact me, any communication makes my mind
          wider
        </div>
        <div className="mt-3">
          任何问题都欢迎联系我，任何交流都让我的思维更宽广
        </div>
      </div>
      <MajorButton href="/contact">Contact Me 联系我</MajorButton>
    </div>
  );
}
