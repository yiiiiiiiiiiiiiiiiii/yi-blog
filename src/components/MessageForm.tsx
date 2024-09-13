"use client";

import { useActionState } from "react";
import IconCheck from "@/components/SvgIcon/Check";
import IconLoading from "@/components/SvgIcon/Loading";
import sendMessage from "@/lib/actions/sendMessage";

const initialState = {
  error: null,
  message: "",
};

export default function MessageForm() {
  const [response, setMessage, isPending] = useActionState(
    sendMessage,
    initialState
  );

  return (
    <div className="flex-1 w-full flex flex-col items-start  ">
      <div className="text-lg font-bold mb-3">Leave your message｜留言</div>
      <form className="w-full" method="post" action={setMessage}>
        <div className="flex flex-col mb-5">
          <label className="text-base font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-gray-300 px-2 py-1 w-full"
            required
            minLength={6}
            maxLength={40}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-base font-bold  mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-gray-300 px-2 py-1 w-full"
            required
            maxLength={60}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-base font-bold  mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border-2 border-gray-300 px-2 py-1 w-full h-40"
            required
            minLength={15}
            maxLength={1000}
          ></textarea>
        </div>
        <div className="h-6 text-sm text-emerald-500 mb-2 ">
          {isPending && <IconLoading className="w-4 h-4 mr-1 animate-spin" />}
          {response.message && !isPending && (
            <div className="flex flex-row justify-start items-center">
              <IconCheck className="w-4 h-4 mr-1" />
              {response.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 disabled:opacity-50"
          disabled={isPending}
        >
          Send ｜ 留言
        </button>
      </form>
    </div>
  );
}
