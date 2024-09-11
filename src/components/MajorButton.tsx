import Link from "next/link";

export default function MajorButton({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href}>
      <div className="text-center w-48 py-3 text-white bg-blue-500  hover:bg-blue-700 ">
        {children}
      </div>
    </Link>
  );
}
