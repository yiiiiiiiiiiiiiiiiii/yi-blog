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
    <div className="w-full break-after-column mb-8 border-b-2 border-b-black">
      <Link href={`/blog/${id}`}>
        <div className="text-xl font-medium mb-3">{title}</div>
      </Link>
      <div className="text-sm mb-5">{content}</div>
      <div className="mb-8">
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
