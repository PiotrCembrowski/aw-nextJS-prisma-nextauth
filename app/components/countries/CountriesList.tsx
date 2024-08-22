"use client";

import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";
import { getCountries } from "@/lib/fetchCountries";
import { useEffect, useState } from "react";

const CountriesList = () => {
  const [countryList, setCountryList] = useState<string | undefined>();

  const { data } = useQuery({
    queryKey: ["Countries"],
    queryFn: getCountries,
  });

  useEffect(() => {
    setCountryList(data);
  }, [data, countryList]);

  console.log(countryList);

  return (
    <>
      <CountriesLisItem />
      <CountriesLisItem />
      <CountriesLisItem />
    </>
  );
};

export default CountriesList;
