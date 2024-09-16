import Link from "next/link";

interface IOverviewProps {
  id: number;
  title: string;
  describe: string;
  createAt: Date;
  updatedAt: Date;
}

export default function Overview({
  id,
  title,
  describe,
  createAt,
}: IOverviewProps) {
  return (
    <div className="grid grid-cols-10 lg:grid-cols-12 mb-10">
      <div className="col-span-10 lg:col-span-2">
        <div className="text-sm font-normal mb-3 lg:pt-6 leading-6 text-gray-500">
          {createAt.toDateString()}
        </div>
      </div>

      <div className="col-span-10 lg:p-6 ">
        <Link href={`/articles/${id}`}>
          <div className="text-lg font-black mb-3">{title}</div>
          <div className="text-base mb-3 line-clamp-3">{describe}</div>
          <div className="text-blue-500 text-sm font-normal leading-6 cursor-pointer">
            Read more | 阅读文章
          </div>
        </Link>
      </div>
    </div>
  );
}
