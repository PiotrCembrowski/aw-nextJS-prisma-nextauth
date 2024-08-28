import React from "react";
import { login } from "@/action/user";

function formLogin() {
  return (
    <>
      <form action={login} className="space-y-4">
        <input
          placeholder="Your e-mail address."
          type="email"
          name="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          placeholder="Your password."
          type="password"
          name="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-aw text-white rounded-xl opacity-80">
          The error message
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-aw hover:bg-awDark text-white text-center rounded-xl transition cursor-pointer "
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default formLogin;
