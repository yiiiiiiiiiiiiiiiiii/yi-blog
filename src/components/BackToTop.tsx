"use client";
import React from "react";
import { useThrottleFn } from "ahooks";
import IconBackToTop from "@/components/SvgIcon/BackToTop";
import scrollTo from "@/lib/utils/scrollTo";

export default function BackToTop(props: React.HTMLAttributes<HTMLDivElement>) {
  const [show, setShow] = React.useState(false);

  const { run: changeButtonShow } = useThrottleFn(
    () => {
      setShow(window.scrollY > window.innerHeight / 2);
    },
    { wait: 100 }
  );

  const scrollToTop: React.MouseEventHandler<HTMLDivElement> = (e) => {
    scrollTo(0, { duration: 500 });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeButtonShow);

    return () => {
      window.removeEventListener("scroll", changeButtonShow);
    };
  }, []);

  return (
    <div
      {...props}
      className={`${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } text-black dark:text-white transition duration-200 ease-in-out fixed flex shadow-lg justify-center items-center bottom-10 right-10 lg:right-20 z-50`}
      onClick={scrollToTop}
    >
      <IconBackToTop className="w-12 h-12 " />
    </div>
  );
}
