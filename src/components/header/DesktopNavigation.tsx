"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function DesktopNavigation(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) {
  return (
    <nav {...props}>
      <ul className="flex flex-nowrap rounded-md px-2 text-base">
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
  let isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "relative block px-5 py-2 font-normal transition",
        isActive
          ? "text-stone-500 dark:text-stone-400"
          : "hover:text-stone-500 dark:hover:text-stone-400"
      )}
    >
      {children}
    </Link>
  );
}
