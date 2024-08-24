"use client";

import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";
import { getCountries } from "@/lib/fetchCountries";
import { useEffect, useState } from "react";

export type CountryType = {
  id: string;
  name: string;
  continent: string;
  costs: number;
  image: string;
};

const CountriesList = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

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
      {countries?.map((country: any) => {
        return <CountriesLisItem key={country.id} country={country} />;
      })}
    </>
  );
};

export default CountriesList;
