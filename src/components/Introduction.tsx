import MajorButton from "./MajorButton";

export default function Introduction() {
  return (
    <div className="flex flex-col w-full justify-start items-center mb-24 mt-8 lg:mt-12 text-center">
      <div className="text-2xl font-bold mb-12">
        <div className="text-5xl text-blue-500 font-black mb-6">y18i</div>
        <div className="text-3xl font-bold mb-2">A Front End Developer</div>
        <div className="mt-3">前端开发专家</div>
      </div>
      <div className="dark:text-gray-400 text-gray-700 mb-12 max-w-4xl">
        <div className="mb-5">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </div>
        <div className="">
          哈喽，我是Yi，一个前端开发专家，这个个人博客网站就算是所有我学习到东西的总结和实践。
        </div>
      </div>
      <MajorButton href="/about">About Me 关于我</MajorButton>
    </div>
  );
}
