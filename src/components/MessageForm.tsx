"use client";

import React from "react";
import IconCheck from "@/components/SvgIcon/Check";
import IconLoading from "@/components/SvgIcon/Loading";
import IconSubmitError from "@/components/SvgIcon/SubmitError";
import sendMessage from "@/lib/actions/sendMessage";
import { useFormStatus } from "react-dom";

interface IResponse {
  success?: boolean;
  message?: string;
}
const initialState: IResponse = {
  message: "",
};

export default function MessageForm() {
  const [response, setResponse] = React.useState(initialState);

  const sendMessageAction = async (formData: FormData) => {
    const message = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    try {
      const response = await sendMessage(message);

      setResponse(response);
    } catch (error) {
      // TODO: handle error
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col items-start  ">
      <div className="text-lg font-bold mb-3">Leave your message｜留言</div>
      <form className="w-full" action={sendMessageAction}>
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
        <FormButton response={response} />
      </form>
    </div>
  );
}

function FormButton({ response }: { response: IResponse }) {
  const { pending } = useFormStatus();

  return (
    <>
      <div
        className={`h-6 text-sm  mb-2 ${
          !!response.success ? "text-emerald-500" : "text-red-500"
        }`}
      >
        {pending && (
          <IconLoading className="w-4 h-4 mr-1 animate-spin text-blue-500" />
        )}
        {!pending && response.success !== undefined && (
          <>
            {!response.success ? (
              <div className="flex flex-row justify-start items-center">
                <IconSubmitError className="w-4 h-4 mr-1" />
                {response.message}
              </div>
            ) : (
              <div className="flex flex-row justify-start items-center">
                <IconCheck className="w-4 h-4 mr-1" />
                {response.message}
              </div>
            )}
          </>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 disabled:opacity-50"
        disabled={pending}
      >
        Send ｜ 留言
      </button>
    </>
  );
}
