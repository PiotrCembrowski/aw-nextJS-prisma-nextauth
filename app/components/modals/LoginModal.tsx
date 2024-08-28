"use client";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/UseLoginModa";

const LoginModal = () => {
  const LoginModal = useLoginModal();

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
