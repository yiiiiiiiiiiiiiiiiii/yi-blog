import Link from "next/link";

const data = {
  title: "Front End Developer",
  titleCN: "前端开发专家",
  describe:
    "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
  describeCN:
    "哈喽，我是Yi，一个前端开发专家,这个个人博客网站就算是所有我学习到东西的总结和实践。",
};

export default function Introduction() {
  return (
    <div className="flex flex-col w-full justify-start items-center mb-20 mt-8 text-center">
      <div className="text-2xl font-medium mb-10">
        <div className="">{data.title}</div>
        <div className="mt-3">{data.titleCN}</div>
      </div>
      <div className="dark:text-neutral-400 text-neutral-700 mb-10">
        <div className="">{data.describe}</div>
        <div className="mt-3">{data.describeCN}</div>
      </div>
      <Link href={"/about"}>
        <div className="w-fit px-6 py-4 border-2 rounded-lg  text-neutral-700 bg-white border-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-black dark:border-neutral-400 dark:hover:bg-neutral-900">
          About Me | 关于我的
        </div>
      </Link>
    </div>
  );
}
