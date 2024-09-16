import Goback from "@/components/Goback";
import prisma from "@/lib/db";
import Scheduler from "@/markdown/Scheduler.mdx";
import React19Update from "@/markdown/React19Update.mdx";
import ReactHooks from "@/markdown/ReactHooks.mdx";
import NEXT from "@/markdown/NEXT.mdx";

export default async function Page({ params }: { params: { id: string } }) {
  const article = await prisma.article.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!article) {
    return <div>Not found</div>;
  }

  return (
    <>
      <Goback />
      <Scheduler />
      {/* <ReactHooks /> */}
      {/* <React19Update /> */}
      {/* <NEXT /> */}
    </>
  );
}
