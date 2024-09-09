import prisma from "@/lib/db";
import Overview from "@/components/Blog/Overview";

export default async function Page() {
  const blogs = await prisma.blog.findMany();

  return (
    <>
      {blogs.concat(blogs, blogs).map((blog, ndx) => {
        return (
          <div key={ndx} className="col-start-3 col-span-8">
            <Overview key={ndx} {...blog} />
          </div>
        );
      })}
    </>
  );
}
