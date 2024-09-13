"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Pagination({
  page,
  limit,
  total,
}: {
  page: number;
  limit: number;
  total: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const onPageChange = (page: number) => {
    router.replace(pathname + `?page=${page}&limit=${limit}`);
  };

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-blue-500 text-white  disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${
            page === page ? "bg-blue-700 text-white" : "bg-blue-500 text-white"
          } `}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === total}
        className="px-4 py-2 bg-blue-500 text-white  disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
