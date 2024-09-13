"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import IconMenu from "../SvgIcon/Menu";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";

export default function MobileNavigation() {
  return (
    <Menu>
      <MenuButton>
        <IconMenu className="w-6 h-6" />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        transition
        className="mt-2 p-2 w-40 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 bg-white dark:bg-black shadow-lg outline-none"
      >
        <MenuItem>
          {({ close }) => (
            <LinkItem href="/" onClick={close}>
              Home ｜ 首页
            </LinkItem>
          )}
        </MenuItem>
        <MenuItem>
          {({ close }) => (
            <LinkItem href="/blog" onClick={close}>
              Blog ｜ 博客
            </LinkItem>
          )}
        </MenuItem>
        <MenuItem>
          {({ close }) => (
            <LinkItem href="/about" onClick={close}>
              About ｜ 关于
            </LinkItem>
          )}
        </MenuItem>
        <MenuItem>
          {({ close }) => (
            <LinkItem href="/contact" onClick={close}>
              Contact ｜ 联系
            </LinkItem>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

function LinkItem({
  href,
  children,
  onClick,
}: React.PropsWithChildren<{ href: string; onClick?: () => void }>) {
  const pathname = usePathname();

  let isActive = false;
  if (href === "/") {
    isActive = pathname === href;
  } else {
    isActive = pathname.includes(href);
  }

  return (
    <Link
      className={clsx(
        "block p-2 text-sm font-medium  data-[focus]:text-blue-500 dark:data-[focus]:text-blue-500",
        isActive && "text-blue-500 dark:text-blue-500"
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
