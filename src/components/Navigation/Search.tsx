"use client";

import { useState } from "react";
import { useDebounceFn } from "ahooks";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconSearch from "@/components/SvgIcon/Search";
import SearchResults from "./SearchResults";
import queryArticle from "@/lib/actions/queryArticle";

export default function Search() {
  const [loading, setLoading] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState<
    Awaited<ReturnType<typeof queryArticle>>
  >([]);

  const fetchArticles = useDebounceFn(
    async (keyword: string) => {
      if (keyword) {
        try {
          const result = await queryArticle(keyword);

          setArticles(result);
        } catch (error) {
          //
        }
        setLoading(false);
      }
    },
    { wait: 300 }
  );

  // Defer the search until the user has stopped typing for 200ms
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setKeyword(keyword);
    setLoading(true);

    fetchArticles.run(keyword);
  };

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setKeyword("");
  }

  return (
    <>
      <button onClick={open}>
        <IconSearch className="h-6 w-6 hover:text-blue-500" />
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 flex w-screen items-center justify-center bg-white/30 dark:bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-10 focus:outline-none backdrop-blur-sm "
        onClose={close}
      >
        <div className="w-full max-w-2xl flex flex-col min-h-full items-center justify-start lg:mt-24">
          <DialogPanel
            transition
            className="w-full max-w-2xl shadow-lg p-6 bg-white dark:bg-black border dark:border-black/50"
          >
            <div className="w-full">
              <input
                type="text"
                id="search"
                className="block w-full py-2 px-2 mt-1 text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-black dark:text-white"
                placeholder="Search article | 查找文章"
                autoComplete="off"
                onChange={handleInput}
              />
            </div>

            <SearchResults
              loading={loading}
              keyword={keyword}
              articles={articles}
              close={close}
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
