import Goback from "@/components/Goback";
import prisma from "@/lib/db";
import Scheduler from "@/markdown/Scheduler.mdx";
import React19Update from "@/markdown/React19Update.mdx";
import ReactHooks from "@/markdown/ReactHooks.mdx";
import NEXT from "@/markdown/NEXT.mdx";

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
      <NEXT />
      {/* <Scheduler /> */}
      {/* <ReactHooks /> */}
      {/* <React19Update /> */}
    </>
  );
}
