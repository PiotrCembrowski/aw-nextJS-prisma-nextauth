"use client";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/UseLoginModa";
import { login } from "@/action/user";
import { useSession } from "next-auth/react";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const { data: session } = useSession();
  const user = session?.user;
  if (user) {
    console.log(user);
  }

  const content = (
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

  return (
    <Modal
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
