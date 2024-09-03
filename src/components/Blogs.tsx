import moment from "moment";
import prisma from "@/lib/db";

export default async function Blogs() {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="columns-2 gap-20">
      {blogs.concat(blogs, blogs).map((blog, ndx) => {
        return <SingleBlog key={ndx} {...blog} />;
      })}
    </div>
  );
}

interface ISinglePostProps {
  title: string;
  content: string | null;
  createAt: Date;
  updatedAt: Date;
}

function SingleBlog({ title, content, createAt }: ISinglePostProps) {
  return (
    <div className="w-full break-after-column">
      <div className="text-lg mb-4">{title}</div>
      <div className="text-sm italic mb-4">{moment(createAt).format()}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
}
