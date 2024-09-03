"use client";

import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useAddReportModal from "@/app/hooks/UseAddReportModal";

const AddReportModal = () => {
  const [currentSteo, setCurrentStep] = useState();
  const addReportModal = useAddReportModal();

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Choose Category</h2>
      <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
    </>
  );

  return (
    <>
      <Modal
        isOpen={addReportModal.isOpen}
        close={addReportModal.close}
        label="Add report."
        content={content}
      />
    </>
  );
};

export default AddReportModal;
