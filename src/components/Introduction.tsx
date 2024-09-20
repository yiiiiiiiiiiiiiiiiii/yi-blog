import MajorButton from "./MajorButton";

export default function Introduction() {
  return (
    <div className="flex flex-col w-full justify-start items-center mb-24 mt-8 lg:mt-12 text-center">
      <div className="text-2xl font-bold mb-10">
        <div className="text-6xl text-blue-500 font-black mb-6">y18i</div>
        <div className="text-3xl font-bold mb-3">A Front-End Developer</div>
        <div className="text-3xl mt-3">前端开发</div>
      </div>
      <div className="dark:text-gray-400 text-gray-700 mb-12 max-w-6xl">
        <div className="mb-5 text-lg">
          {`I'm y18i, a front-end developer, and I built this site out of interest
          to aggregate and share what I've learned. More information can be
          found at the link below.`}
        </div>
        <div className="text-lg">
          {` 我是y18i，一个前端开发，出于兴趣我建立了这个网站，汇总和分享我所学到的知识。可通过下方链接了解更多信息。`}
        </div>
      </div>
      <MajorButton href="/about">About Me 关于我</MajorButton>
    </div>
  );
}
