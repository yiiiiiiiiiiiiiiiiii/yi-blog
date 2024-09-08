import Link from "next/link";

export default function MajorButton({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href}>
      <div className="text-center w-56 px-6 py-4 border-2 text-neutral-700 bg-white border-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-black dark:border-neutral-400 dark:hover:bg-neutral-900">
        {children}
      </div>
    </Link>
  );
}
