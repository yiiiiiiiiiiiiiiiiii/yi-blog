const siteQAList = [
  {
    q: "为什么要开发网站？",
    a: "主要是为了沉淀学习的内容，另外非常期待有一个自己的博客网站。",
  },
  {
    q: "网站使用了哪些工具？",
    a: "网站主体采用NEXT.js框架，同时使用了tailwind CSS，数据部分使用Postgres作为数据库，并使用Prisma作为ORM进行数据的操作。",
  },
  {
    q: "网站具有哪些特性？",
    a: "主要包含响应式，暗黑模式，SSR，全文搜索，邮件转发等功能。",
  },
];

const meQAList = [
  {
    q: "过往经历？",
    a: "从2018年开始从事前端开发工作，先后在携程，蔚来, 阿里从事前端开发工作，积累了丰富的一线大厂前端开发的工作经验。",
  },
  {
    q: "目前情况是怎么样的？",
    a: "目前待业并学习一些新内容。",
  },
];

export default function Page() {
  return (
    <div>
      <div className="text-3xl font-bold mb-10">About 关于</div>
      <div className="mb-20">
        <div className="font-bold text-xl pb-8 mb-8 border-b-2 border-b-black dark:border-b-white">
          About the site 关于网站
        </div>
        {siteQAList.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="mb-2 flex flex-row justify-start items-start">
              <div className="mr-2 font-bold">Q:</div>
              <div className="font-bold">{item.q}</div>
            </div>
            <div className="mb-2 flex flex-row justify-start items-start">
              <div className="mr-2">A:</div>
              <div>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="font-bold text-xl pb-8 mb-8 border-b-2 border-b-black dark:border-b-white">
          About me 关于我
        </div>
        {meQAList.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="mb-2 flex flex-row justify-start items-start">
              <div className="mr-2 font-bold">Q:</div>
              <div className="font-bold">{item.q}</div>
            </div>
            <div className="mb-2 flex flex-row justify-start items-start">
              <div className="mr-2">A:</div>
              <div>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
