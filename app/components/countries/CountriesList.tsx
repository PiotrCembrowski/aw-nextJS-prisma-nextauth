"use client";

import { useQuery } from "@tanstack/react-query";
import CountriesLisItem from "./CountriesLisItem";
import { getCountries } from "@/lib/fetchCountries";
import { useEffect, useState, Fragment } from "react";
import { useContinent } from "@/app/hooks/useContinents";

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

// TIMES INTERVALS AND AXIOS
// asign data of countries to const var
// nextjs course 129, 189, 290 episode, data fetching
// get read of static cache

const CountriesList: React.FC<CountryListProps> = (
  index: any,
  name: string
  // { user_id, favorites }
) => {
  const continentName = useContinent((state) => state.name);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const { data } = useQuery({
    queryKey: ["Countries"],
    queryFn: async () => {
      const data = getCountries(continentName);
      return data;
    },
    notifyOnChangeProps: "all",
  });

  function renderCountries() {
    setCountries(data?.list);
  }

  useEffect(() => {
    renderCountries();
  }, [continentName]);

  console.log(data);

  return (
    <Fragment key={index}>
      {data?.map((country: any) => {
        return <CountriesLisItem key={country.id} country={country} />;
      })}
    </Fragment>
  );
};

export default CountriesList;
