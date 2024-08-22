"use client";

import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";
import { getCountries } from "@/lib/fetchCountries";
import { useEffect, useState } from "react";

const CountriesList = () => {
  const [countries, setCountries] = useState<string | undefined>();

  const { data } = useQuery({
    queryKey: ["Countries"],
    queryFn: getCountries,
  });

  useEffect(() => {
    setCountries(data);
  }, [data, countries]);

  console.log(countries);

  return (
    <>
      <CountriesLisItem />
      <CountriesLisItem />
      <CountriesLisItem />
    </>
  );
};

export default CountriesList;
