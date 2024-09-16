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
              Mainly to precipitate the learning content, while feeling that
              having your own website is a cool thing
            </div>
            <div>
              主要是为了沉淀学习的内容，同时感觉有一个自己的网站是一件很酷的事情。
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
              The main body of the website adopts the NEXT.js framework and
              tailwind CSS, which makes the website responsive. Postgres is used
              as the database for data part, and Prisma is used as the ORM for
              data operation.
            </div>
            <div>
              网站主体采用NEXT.js框架，同时使用了tailwind
              CSS，使得网站具有响应式的特点，数据部分使用Postgres作为数据库，并使用Prisma作为ORM进行数据的操作。
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
              我从2018年开始从事前端开发工作，先后在携程，蔚来,
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
