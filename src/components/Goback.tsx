"use client";

import { useRouter } from "next/navigation";
import IconArrowBack from "@/components/SvgIcon/Back";

export default function Goback() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="flex text-blue-500 justify-start items-center mb-6 no-underline text-sm cursor-pointer "
    >
      <IconArrowBack className="w-4 h-4 mr-2" />
      回到文章列表｜Back to article list
    </div>
  );
}
