import Link from "next/link";
import moment from "moment";

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
        <div className="text-2xl font-bold mb-5">{title}</div>
      </Link>
      <div className="text-base mb-5">{content}</div>
      <div className="mb-10">
        <div className="text-sm font-normal italic">
          创建时间：{moment(createAt).format()}
        </div>
        <div className="text-sm font-normal italic">
          更新时间：{moment(createAt).format()}
        </div>
      </div>
    </div>
  );
}
