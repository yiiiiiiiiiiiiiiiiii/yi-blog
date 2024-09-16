import prisma from "@/lib/db";
import Overview from "@/components/Article/Overview";
import ArticlesPagination from "@/components/Article/Pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const limit = 3;
  const { page: stringPage = "1" } = searchParams;
  const page = parseInt(stringPage);

  const total = await prisma.article.count();
  // const total = 100;
  const totalPages = Math.ceil(total / limit);

  const skip = (page - 1) * limit;
  const articles = await prisma.article.findMany({
    skip,
    take: limit,
  });

  return (
    <div>
      <div className="text-3xl font-bold mb-10">Articles 文章</div>
      <div className="mb-10">
        <div className="mb-3">
          The content of the article is sorted in chronological order
        </div>
        <div>文章的内容是按照时间先后排序的</div>
      </div>
      <div className="">
        {articles.map((article, ndx) => {
          return (
            <div key={ndx} className="col-start-3 col-span-8 ">
              <Overview key={ndx} {...article} />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <ArticlesPagination
          pagination={{
            page: page,
            totalPages,
            nextPage: page < totalPages ? page + 1 : null,
            prevPage: page > 1 ? page - 1 : null,
          }}
        />
      )}
    </div>
  );
}
