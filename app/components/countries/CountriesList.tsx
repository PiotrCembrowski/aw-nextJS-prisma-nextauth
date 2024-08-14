"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";

const CountriesList = () => {
  const getCountries = async () => {
    const url = "http://localhost:3000/api/countries";
  };

  const query = useQuery({
    queryKey: ["Countries"],
    queryFn: getCountries(),
  });

  console.log(query);

  return (
    <>
      <CountriesLisItem />
      <CountriesLisItem />
      <CountriesLisItem />
    </>
  );
};

export default CountriesList;
