"use client";

import IconBackToTop from "@/components/SvgIcon/IconBackToTop";
import scrollTo from "@/lib/utils/scrollTo";

export default function BackToTop(props: React.HTMLAttributes<HTMLDivElement>) {
  const scrollToTop: React.MouseEventHandler<HTMLDivElement> = (e) => {
    scrollTo(0, { duration: 500 });
    props?.onClick?.(e);
  };

  return (
    <div
      {...props}
      className="fixed flex shadow-lg justify-center items-center bottom-10 right-20 z-50"
      onClick={scrollToTop}
    >
      <IconBackToTop className="w-12 h-12 " />
    </div>
  );
}
