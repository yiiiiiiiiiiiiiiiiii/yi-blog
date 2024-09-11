import Record from "@/components/Record";
import Introduction from "@/components/Introduction";
import Ability from "@/components/Ability";
import Contact from "@/components/Contact";
import HomeOverView from "@/components/Blog/HomeOverView";
import prisma from "@/lib/db";

export default async function Page() {
  const blogs = await prisma.blog.findMany({
    take: 2,
  });

  return (
    <>
      <main className="container mx-auto">
        <Introduction />
        <Ability />
        <HomeOverView blogs={blogs} />
        <Contact />
      </main>
      <Record />
    </>
  );
}
