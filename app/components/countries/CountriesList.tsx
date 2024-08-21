"use client";

import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";
import { getCountries } from "@/lib/fetchCountries";

const CountriesList = () => {
  const { data } = useQuery({
    queryKey: ["Countries"],
    queryFn: getCountries,
  });

  console.log(data);

  return (
    <>
      <CountriesLisItem />
      <CountriesLisItem />
      <CountriesLisItem />
    </>
  );
};

export default CountriesList;
