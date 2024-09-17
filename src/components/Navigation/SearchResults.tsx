import { use } from "react";
import Link from "next/link";
import queryArticle from "@/lib/actions/queryArticle";

interface SearchResultsProps {
  keyword: string;
  close: () => void;
}

export default function SearchResults({ keyword, close }: SearchResultsProps) {
  if (keyword === "") {
    return null;
  }
  const articles = use(queryArticle(keyword));

  if (articles.length === 0) {
    return (
      <div className="mt-4 text-sm font-medium">
        No matches articles | 未匹配到任何文章
      </div>
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
