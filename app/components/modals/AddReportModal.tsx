"use client";

import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useAddReportModal from "@/app/hooks/UseAddReportModal";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

const AddReportModal = () => {
  //
  // States
  const [currentStep, setCurrentStep] = useState(1);
  const [dataReport, setDataReport] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();

  const addReportModal = useAddReportModal();

  //
  // Set datas

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place.</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-400 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full h-[200px] p-4 border border-gray-400 rounded-xl"
              ></textarea>
            </div>
          </div>

          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="Previous"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <>
          <p>Step 3</p>
          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="Previous"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="Previous"
            onClick={() => setCurrentStep(3)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        <>5 step</>
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
