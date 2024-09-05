"use client";

import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useAddReportModal from "@/app/hooks/UseAddReportModal";
import Continents from "../addreport/Continents";

const AddReportModal = () => {
  //
  // States
  const [currentStep, setCurrentStep] = useState(1);
  const [dataReport, setDataReport] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");

  const addReportModal = useAddReportModal();

  //
  // Set datas

  const setContinent = (continent: string) => {
    setDataReport(continent);
  };

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>
          <Continents
            dataContinents={dataReport}
            setContinents={(continent) => setContinent(continent)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <p>Step 2</p>
          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="Previous"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : (
        <>
          <p>Step 3</p>
          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="Previous"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      )}
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
