import Link from "next/link";

export interface ResultArticle {
  id: number;
  title: string;
  describe: string;
}

interface SearchResultsProps {
  loading: boolean;
  keyword: string;
  articles: ResultArticle[];
  close: () => void;
}

export default function SearchResults({
  loading,
  keyword,
  articles,
  close,
}: SearchResultsProps) {
  if (keyword === "") {
    return null;
  }

  if (loading) {
    return (
      <div className="mt-4 text-sm font-medium">Loading... | 搜索中...</div>
    );
  }

  return (
    <div>
      {articles.map((article) => (
        <Link key={article.id} href={`/articles/${article.id}`} onClick={close}>
          <div
            key={article.id}
            className="py-4 border-b  border-black dark:border-white/50 last:border-none"
          >
            <h2 className="font-bold">{article.title}</h2>
            <p className="mt-2 text-sm">{article.describe}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
