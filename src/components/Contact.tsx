import MajorButton from "@/components/MajorButton";

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-start items-center mb-24 mt-8 lg:mt-12 text-center">
      <div className="w-full mx-auto mb-10 text-center font-bold">
        Contact information | 联系方式
      </div>
      <div className="dark:text-gray-400 text-gray-700 mb-12">
        <div className="">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </div>
        <div className="mt-3">
          哈喽，我是Yi，一个前端开发专家,这个个人博客网站就算是所有我学习到东西的总结和实践。
        </div>
      </div>
      <MajorButton href="/contact">Contact Me 联系我</MajorButton>
    </div>
  );
}
