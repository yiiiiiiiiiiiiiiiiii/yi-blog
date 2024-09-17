import React from "react";
import Link, { LinkProps } from "next/link";
import ChevronLeft from "./SvgIcon/ChevronLeft";
import ChevronRight from "./SvgIcon/ChevronRight";
import MoreHorizontal from "./SvgIcon/MoreHorizontal";

import clsx from "clsx";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={clsx("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLUListElement> & {
  ref?: React.Ref<HTMLUListElement>;
}) {
  return (
    <ul
      ref={ref}
      className={clsx("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLLIElement> & { ref?: React.Ref<HTMLLIElement> }) {
  return <li ref={ref} className={clsx("", className)} {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  className?: string;
} & LinkProps;

function PaginationLink({
  className,
  isActive,
  children,
  ...props
}: React.PropsWithChildren<PaginationLinkProps>) {
  return (
    <Link
      className={clsx(
        "un-underline",
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
        "h-10 px-2 py-2",
        isActive
          ? "text-blue-500 underline"
          : "hover:text-blue-500/90  hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink className={clsx("gap-1 pl-2.5", className)} {...props}>
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}
PaginationPrevious.displayName = "PaginationPrevious";

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={clsx("gap-1 pr-2.5", className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={clsx("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
