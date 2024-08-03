"use client";

import { useEffect } from "react";
import CountriesLisItem from "./CountriesLisItem";

const CountriesList = () => {
  const getCountries = async () => {
    const url = "http://localhost:3000/api/countries";
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <CountriesLisItem />
      <CountriesLisItem />
      <CountriesLisItem />
    </>
  );
};

export default CountriesList;
