import Link from "next/link";

interface IOverviewProps {
  id: number;
  title: string;
  content: string | null;
  createAt: Date;
  updatedAt: Date;
}

export default function Overview({
  id,
  title,
  content,
  createAt,
}: IOverviewProps) {
  return (
    <div className="grid grid-cols-10 lg:grid-cols-12 mb-10">
      <div className="col-span-10 lg:col-span-2">
        <div className="text-sm font-normal mb-3 lg:pt-6 leading-6">
          {createAt.toDateString()}
        </div>
      </div>
      <div className="col-span-10 lg:p-6 ">
        <div className="text-lg font-black mb-3">{title}</div>
        <div className="text-base mb-3 line-clamp-3">{content}</div>
        <div className="text-blue-500 text-sm font-normal leading-6 cursor-pointer hover:underline">
          Read more | 阅读文章
        </div>
      </div>
    </div>
  );
}
