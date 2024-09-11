import Link from "next/link";
import dayjs from "dayjs";

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
    <div className="w-full break-after-column mb-10 border-b-2 border-b-black dark:border-b-white">
      <Link href={`/blog/${id}`}>
        <div className="text-xl font-bold mb-2 text-blue-500">{title}</div>
        <div className="mb-3">
          <div className="text-sm font-normal italic leading-6">
            创建时间：{createAt.toDateString()}
          </div>
        </div>
        <div className="text-base mb-5 line-clamp-3 leading-7">{content}</div>
      </Link>
    </div>
  );
}
