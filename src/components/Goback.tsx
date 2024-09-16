import Link from "next/link";
import IconArrowBack from "@/components/SvgIcon/Back";

export default function Goback() {
  return (
    <Link href="/articles" className="no-underline">
      <div className="flex text-blue-500 justify-start items-center mb-8 no-underline cursor-pointer ">
        <IconArrowBack className="w-5 h-5 mr-2" />
        回到文章列表｜Back to article list
      </div>
    </Link>
  );
}
