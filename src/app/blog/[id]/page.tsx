import Goback from "@/components/Goback";
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
    <>
      <Goback />
      <div className="text-3xl text-black font-bold mb-4">{blog.title}</div>
      <div className="text-sm italic mb-10">{blog.createAt.toDateString()}</div>
      <Welcome />
    </>
  );
}
