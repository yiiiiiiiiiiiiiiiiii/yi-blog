import prisma from "@/lib/db";
import Overview from "@/components/Blog/Overview";

export default async function Page() {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="">
      {blogs.concat(blogs, blogs).map((blog, ndx) => {
        return <Overview key={ndx} {...blog} />;
      })}
    </div>
  );
}
