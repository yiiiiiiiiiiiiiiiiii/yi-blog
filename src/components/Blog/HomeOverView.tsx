import type prisma from "@/lib/db";

export default async function HomeOverView({
  blogs,
}: {
  blogs: Awaited<ReturnType<typeof prisma.blog.findMany>>;
}) {
  return (
    <div className="mb-24">
      <div className="w-full mx-auto mb-10 text-center font-bold">
        Top blog | 置顶博客
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 gap-x-10 gap-y-10">
        {blogs?.map((blog, ndx) => {
          return (
            <div key={ndx} className="flex-1 text-left">
              <div className="mb-2 text-base font-bold">{blog.title}</div>
              {/* TODO: 改变describe名称 */}
              <div className="text-base font-normal dark:text-gray-400 text-gray-700 line-clamp-3 leading-7">
                {blog.describe}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
