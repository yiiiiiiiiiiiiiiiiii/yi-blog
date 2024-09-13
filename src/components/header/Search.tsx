"use client";

import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import IconSearch from "@/components/SvgIcon/Search";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
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
        <div className="flex flex-col min-h-full items-center justify-start lg:mt-24">
          <DialogPanel
            transition
            className="w-full max-w-2xl shadow-lg p-6 bg-white dark:bg-black border dark:border-black/50"
          >
            <form>
              <div>
                <input
                  type="text"
                  id="search"
                  className="block w-full py-2 px-4 mt-1 text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Search blog | 查找博客"
                />
              </div>
            </form>
            <p className="mt-5 ">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
            <p className="mt-5 ">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
            <p className="mt-5 ">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
