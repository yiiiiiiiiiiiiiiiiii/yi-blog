import prisma from "@/lib/db";
import Overview from "@/components/Blog/Overview";
import BlogPostsPagination from "@/components/BlogPostsPagination";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const limit = 3;
  const { page: stringPage = "1" } = searchParams;
  const page = parseInt(stringPage);

  const total = await prisma.blog.count();
  const totalPages = Math.ceil(total / limit);

  const skip = (page - 1) * limit;
  const blogs = await prisma.blog.findMany({
    skip,
    take: limit,
  });

  return (
    <div>
      <div className="text-3xl font-bold mb-10">Blogs 博客</div>
      <div className="mb-10">
        <div className="mb-3">
          The content of the blog is sorted in chronological order
        </div>
        <div>博客的内容是按照时间先后排序的</div>
      </div>
      <div className="">
        {blogs.map((blog, ndx) => {
          return (
            <div key={ndx} className="col-start-3 col-span-8 ">
              <Overview key={ndx} {...blog} />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <BlogPostsPagination
          pagination={{
            page: page,
            totalPages,
            nextPage: page < totalPages ? page + 1 : null,
            prevPage: page > 1 ? page - 1 : null,
          }}
        />
      )}
    </div>
  );
}
