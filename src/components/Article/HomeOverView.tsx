import Link from "next/link";
import type prisma from "@/lib/db";

export default async function HomeOverView({
  articles,
}: {
  articles: Awaited<ReturnType<typeof prisma.article.findMany>>;
}) {
  return (
    <div className="mb-24">
      <div className="w-full mx-auto mb-10 text-center font-bold">
        Top articles | 置顶文章
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 gap-x-10 gap-y-10">
        {articles?.map((article, ndx) => {
          return (
            <Link key={ndx} href={`/articles/${article.id}`}>
              <div key={ndx} className="flex-1 text-left">
                <div className="mb-2 text-base font-bold">{article.title}</div>
                <div className="text-base font-normal dark:text-gray-400 text-gray-700 line-clamp-3 leading-7">
                  {article.describe}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
