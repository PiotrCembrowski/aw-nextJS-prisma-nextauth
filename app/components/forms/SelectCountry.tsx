"use client";

import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

export type SelectCountryValue = {
  value: string;
  label: string;
};

interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = (value, onChange) => {
  const { getAll } = useCountries();

  return (
    <>
      <Select
        isClearable
        placeholder="Anywhere"
        options={getAll()}
        value={value as any}
        // onChange={(value) => onChange(value as SelectCountryValue)}
        onChange={(value) => value}
      />
    </>
  );
};

export default SelectCountry;
