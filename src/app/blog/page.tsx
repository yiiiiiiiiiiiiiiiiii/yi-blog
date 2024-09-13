import prisma from "@/lib/db";
import Overview from "@/components/Blog/Overview";
import Pagination from "@/components/Pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: number; limit: number };
}) {
  const { page = 1, limit = 10 } = searchParams;
  const skip = (page - 1) * limit;

  const total = await prisma.blog.count();
  const blogs = await prisma.blog.findMany({
    skip,
    take: limit,
  });

  return (
    <div>
      <div className="text-3xl font-bold mb-10">Blogs 博客</div>
      <div className="mb-10">博客的内容是按照时间先后排序的</div>
      <div className="">
        {blogs.map((blog, ndx) => {
          return (
            <div key={ndx} className="col-start-3 col-span-8 ">
              <Overview key={ndx} {...blog} />
            </div>
          );
        })}
      </div>
      <Pagination total={total} page={page} limit={limit} />
    </div>
  );
}
