import Record from "@/components/Record";
import Introduction from "@/components/Introduction";
import Ability from "@/components/Ability";
import Contact from "@/components/Contact";
import HomeOverView from "@/components/Article/HomeOverView";
import prisma from "@/lib/db";

export default async function Page() {
  const articles = await prisma.article.findMany({
    take: 2,
  });

  return (
    <>
      <main className="container mx-auto">
        <Introduction />
        <Ability />
        <HomeOverView articles={articles} />
        <Contact />
      </main>
      <Record />
    </>
  );
}
