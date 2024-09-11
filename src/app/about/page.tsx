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
            <div className="mb-1">Why develop a website?</div>
            <div>为什么要开发网站？</div>
          </div>
          <div>
            <div className="mb-1">
              It is mainly to precipitate the learning content, and it is also a
              cool thing to have your own blog.
            </div>
            <div>
              主要是为了沉淀学习的内容，另外有一个自己的博客也是一件很酷的事情。
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-3">
            <div className="mb-1">What technologies are used on the site?</div>
            <div>网站使用了哪些工具？</div>
          </div>
          <div>
            <div className="mb-1">
              The style section uses tailwind CSS to make the site responsive.
              The ORM part uses Prisma and the database uses Postgres.
            </div>
            <div>
              样式部分使用了tailwind
              Css，使得网站具有响应式的特点。ORM部分使用了Prisma，数据库使用了Postgres
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl pb-10 mb-10 border-b-2 border-b-black dark:border-b-white">
          About me 关于我
        </div>
        <div className="mb-6">
          <div className="mb-3">
            <div className="mb-1">Past experience?</div>
            <div>过往经历？</div>
          </div>
          <div>
            <div className="mb-1">
              Since 2018, I have been engaged in front-end development work in
              Ctrip, NIO and Ali, and have accumulated rich experience in
              front-end development of first-line large factories.
            </div>
            <div>
              从2018年开始从事前端开发工作，先后在携程，蔚来,
              阿里从事前端开发工作，积累了丰富的一线大厂前端开发的工作经验。
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-3">
            <div className="mb-1">What is the current situation?</div>
            <div>目前情况是怎么样的？</div>
          </div>
          <div>
            <div className="mb-1">
              Currently unemployed and learning some new things.
            </div>
            <div>目前待业并学习一些新内容。</div>
          </div>
        </div>
      </div>
    </div>
  );
}
