import MajorButton from "./MajorButton";

export default function Introduction() {
  return (
    <div className="flex flex-col w-full justify-start items-center mb-24 mt-8 lg:mt-12 text-center">
      <div className="text-2xl font-bold mb-12">
        <div className="text-5xl text-blue-500 font-black mb-6">y18i</div>
        <div className="text-3xl font-bold mb-2">A Front End Developer</div>
        <div className="mt-3">前端，构建人与万物互联的世界</div>
      </div>
      <div className="dark:text-gray-400 text-gray-700 mb-12 max-w-4xl">
        <div className="mb-5">
          Hi, I'm Yi, a front-end developer, and this site is a summary and
          practice of everything I've learned.
        </div>
        <div className="">
          嗨，我是Yi，一个前端开发，这个网站就算是所有我学习到东西的总结和实践。
        </div>
      </div>
      <MajorButton href="/about">About Me 关于我</MajorButton>
    </div>
  );
}
