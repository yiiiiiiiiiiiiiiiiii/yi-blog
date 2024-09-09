import prisma from "@/lib/db";

export default async function Feature() {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="flex flex-row justify-center items-center mb-10">
      {blogs.concat(blogs, blogs).map((blog, ndx) => {
        return (
          <div key={ndx} className="flex-1 text-center">
            <div>{blog.title}</div>
            {/* TODO: 改变describe名称 */}
            <div>{blog.describe}</div>
          </div>
        );
      })}
    </div>
  );
}
