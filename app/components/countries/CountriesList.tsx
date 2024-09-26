"use client";

import CountriesLisItem from "./CountriesLisItem";
import { useState, Fragment, useEffect, cache } from "react";
import { useContinent } from "@/app/hooks/useContinents";
import useSWR from "swr";

export type CountryType = {
  id: string;
  name: string;
  continent: string;
  costs: number;
  image: string;
};

interface CountryListProps {
  user_id?: string | null;
  favorites: boolean | null;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const CountriesList: React.FC<CountryListProps> = (
  index: any,
  name: string
  // { user_id, favorites }
) => {
  const continentName = useContinent((state) => state.name);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const { data, error } = useSWR(
    `http://localhost:3000/api/continent/${continentName}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const continent = data.continent;
      setCountries(continent);
    }
  }, [data]);

  console.log(countries);
  console.log(continentName);

  let content = countries?.map((country: any) => {
    return <CountriesLisItem key={country.id} country={country} />;
  });

  return <Fragment key={index}>{content}</Fragment>;
};

export default CountriesList;
