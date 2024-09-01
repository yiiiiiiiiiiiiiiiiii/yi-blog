interface IData {
  title: string;
  describe: string;
}

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
    <div className="w-4/5 mt-8 text-left">
      <div className="">
        <div className="text-3xl font-medium">{data.title}</div>
        <div className="mt-3">{data.titleCN}</div>
      </div>
      <div className="mt-8 text-zinc-500">
        <div className="">{data.describe}</div>
        <div className="mt-3">{data.describeCN}</div>
      </div>
      <div className="w-fit p-5 mt-8 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 border-spacing-0 border-2 border-zinc-500">
        About Me | 关于我的
      </div>
    </div>
  );
}
