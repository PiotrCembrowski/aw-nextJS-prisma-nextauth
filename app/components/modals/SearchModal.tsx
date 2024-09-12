"use client";

import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { useState } from "react";

const SearchModal = () => {
  let content = <></>;
  const searchModal = useSearchModal();
  const [country, setCountry] = useState<SelectCountryValue>();

  const contentLocation = (
    <>
      <h2>
        <h2 className="mb-6 text-2xl">Where do you want to go?</h2>
      </h2>
    </>
  );

  if (searchModal.step == "location") {
    content = contentLocation;
  }

  return (
    <Modal
      label="Search"
      content={content}
      close={searchModal.close}
      isOpen={searchModal.isOpen}
    />
  );
};

export default SearchModal;
