import prisma from "@/lib/db";
import Overview from "@/components/Blog/Overview";

export default async function Page() {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="w-6/12 md:w-8/12 sm:w-10/12 mx-auto mt-8">
      {blogs.concat(blogs, blogs).map((blog, ndx) => {
        return <Overview key={ndx} {...blog} />;
      })}
    </div>
  );
}
