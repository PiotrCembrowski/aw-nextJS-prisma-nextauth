"use client";

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/UseSignupModal";
import { register } from "@/action/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupModal = () => {
  const router = useRouter();
  const [error, setError] = useState<string[]>([]);
  const SignupModal = useSignupModal();

  const content = (
    <>
      <form action={register} className="space-y-4">
        <input
          placeholder="Your user name."
          type="text"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          name="username"
        />
        <input
          placeholder="Your e-mail address."
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          name="useremail"
        />
        <input
          placeholder="Your password."
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          name="userpassword"
        />
        <input
          placeholder="Repeat password."
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          name="userpasswordrepeated"
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

        {/* <CustomButton label="Submit" onClick={() => console.log("test")} /> */}
      </form>
    </>
  );

  return (
    <Modal
      isOpen={SignupModal.isOpen}
      close={SignupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default SignupModal;
