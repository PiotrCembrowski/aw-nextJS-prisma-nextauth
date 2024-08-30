"use client";

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/UseSignupModal";
import { register } from "@/action/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignupModal = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState("password");
  const [password2, setPassword2] = useState("password2");
  const [flag, setFlag] = useState<boolean>(false);
  const SignupModal = useSignupModal();

  useEffect(() => {
    if (password == password2) setFlag(true);
  }, [flag, password, password2]);

  let button;

  button = (
    <button
      type="submit"
      className={`w-full py-4 bg-aw hover:bg-awDark text-white text-center rounded-xl transition ${
        flag ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      disabled={true}
    >
      Submit
    </button>
  );

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
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Repeat password."
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          name="userpasswordrepeated"
          onChange={(e) => setPassword2(e.target.value)}
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-aw text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        {button}
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
