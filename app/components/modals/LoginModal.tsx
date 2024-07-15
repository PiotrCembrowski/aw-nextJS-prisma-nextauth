"use client";

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/UseLoginModa";

const LoginModal = () => {
  const LoginModal = useLoginModal();

  const content = <h2 className="mb-6 text-2xl">Welcome to bienbi</h2>;

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
