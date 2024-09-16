import { MDXRemote } from "next-mdx-remote/rsc";
import Goback from "@/components/Goback";
import prisma from "@/lib/db";

export default async function RemoteMdxPage({
  params,
}: {
  params: { id: string };
}) {
  const article = await prisma.article.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!article?.content) {
    return <div>Not found</div>;
  }

  const res = await fetch(article?.content);
  const markdown = await res.text();

  return (
    <>
      <Goback />
      <MDXRemote source={markdown} />
    </>
  );
}
