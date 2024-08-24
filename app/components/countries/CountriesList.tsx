"use client";

import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";
import { getCountries } from "@/lib/fetchCountries";
import { useEffect, useState } from "react";

const CountriesList = () => {
  const [countries, setCountries] = useState<string[] | undefined>();

  const { data } = useQuery({
    queryKey: ["Countries"],
    queryFn: getCountries,
  });

  function renderCountries() {
    setCountries(data?.list);
  }

  useEffect(() => {
    renderCountries();
  });

  console.log(countries);

  return (
    <>
      {countries?.map((country: unknown, index: number) => {
        return <CountriesLisItem key={index} />;
      })}
    </>
  );
};

export default CountriesList;
