export default function Page() {
  return (
    <div>
      <div className="text-3xl font-bold mb-10">About 关于</div>
      <div className="mb-20">
        <div className="font-bold text-xl pb-10 mb-10 border-b-2 border-b-black dark:border-b-white">
          About the site 关于网站
        </div>
        <div className="mb-6">
          <div className="mb-3">
            <div className="mb-1">为什么要开发网站？</div>
            <div>Why develop a website?</div>
          </div>
          <div>
            <div className="mb-1">
              主要是为了沉淀学习的内容，另外有一个自己的博客也是一件很酷的事情。
            </div>
            <div>
              It is mainly to precipitate the learning content, and it is also a
              cool thing to have your own blog.
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-3">
            <div className="mb-1">网站使用了哪些工具？</div>
            <div>What technologies are used on the site?</div>
          </div>
          <div>
            <div className="mb-1">
              样式部分使用了tailwind
              Css，使得网站具有响应式的特点。ORM部分使用了Prisma，数据库使用了Postgres
            </div>
            <div>
              The style section uses tailwind CSS to make the site responsive.
              The ORM part uses Prisma and the database uses Postgres.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl pb-10 mb-10 border-b-2 border-b-black dark:border-b-white">
          About me 关于我
        </div>
        <div className="mb-10">
          Blandit libero volutpat sed cras ornare arcu. Cursus sit amet dictum
          sit amet. Nunc vel risus commodo viverra maecenas accumsan. Libero id
          faucibus nisl tincidunt eget nullam non nisi est. Varius quam quisque
          id diam vel quam. Id donec ultrices tincidunt arcu non.
        </div>
        <div>
          周末闲着，明天还要装饰蝴蝶结，真是受宠若惊。这门课程很有趣。现在，即使是一个微笑也是拉上一层窗帘的好方法。球迷需要的不仅仅是一款免费游戏。它比其他人更不同。也就是说，直到篮球比赛发布。
        </div>
      </div>
    </div>
  );
}
