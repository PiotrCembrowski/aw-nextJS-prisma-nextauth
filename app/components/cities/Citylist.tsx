import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import CityListItem from "./CityListItem";
import { Fragment } from "react";

export type CityType = {
  id: string;
  name: string;
  country: string;
  costs: number;
  image: string;
};

const prisma = new PrismaClient();

const Citylist = async () => {
  const headerList = headers();
  const pathname = await headerList.get("x-url");
  const countryName = pathname?.substring(pathname.lastIndexOf("/") + 1);

  let cities;
  if (countryName) {
    cities = await prisma.country.findMany({
      where: {
        name: countryName,
      },
      select: {
        cities: true,
      },
    });
  }

  console.log(cities);

  let content = await cities?.map((city) => {
    return <CityListItem key={city.city_id} city={city} />;
  });

  return <Fragment>{content}</Fragment>;
};

export default Citylist;
