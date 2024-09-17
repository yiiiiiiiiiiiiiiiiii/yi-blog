"use client";

import { Suspense, useState, useDeferredValue } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconSearch from "@/components/SvgIcon/Search";
import SearchResults from "./SearchResults";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);

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
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <Suspense
              fallback={
                <div className="mt-4 text-sm font-medium">
                  Loading... | 搜索中...
                </div>
              }
            >
              <div
                style={{
                  opacity: keyword !== deferredKeyword ? 0.5 : 1,
                  transition:
                    keyword !== deferredKeyword
                      ? "opacity 0.2s 0.2s linear"
                      : "opacity 0s 0s linear",
                }}
              >
                <SearchResults keyword={deferredKeyword} close={close} />
              </div>
            </Suspense>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
