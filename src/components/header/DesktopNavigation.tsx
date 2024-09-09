"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function DesktopNavigation(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) {
  return (
    <nav {...props}>
      <ul className="flex flex-nowrap rounded-md text-base">
        <li className="">
          <NavItem href="/blog">Blog | 随记</NavItem>
        </li>
        <li className="">
          <NavItem href="/about">About | 关于</NavItem>
        </li>
        <li className="">
          <NavItem href="/contact">Contact | 联系</NavItem>
        </li>
      </ul>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();

  let isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={clsx(
        "relative block pr-10 py-2 font-medium transition",
        isActive
          ? "underline text-blue-500"
          : "hover:text-blue-500 dark:hover:text-blue-500"
      )}
    >
      {children}
    </Link>
  );
}
