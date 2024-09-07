import Link from "next/link";
import IconArrowBack from "@/components/SvgIcon/Back";
import prisma from "@/lib/db";
import Welcome from "@/markdown/welcome.mdx";

export default async function Page({ params }: { params: { id: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog) {
    return <div>Not found</div>;
  }

  return (
    <div className="">
      <Link
        href={"/blog"}
        className="flex justify-start items-center mb-6 no-underline italic "
      >
        <IconArrowBack className="w-4 h-4 mr-2" />
        回到文章列表｜Back to blog list
      </Link>
      <div className="text-3xl text-black font-bold mb-4">{blog.title}</div>
      <div className="text-sm italic mb-10">{blog.createAt.toDateString()}</div>
      <Welcome />
    </div>
  );
}
