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

const Citylist = () => {
  const headerList = headers();
  const pathname = await headerList.get("x-url");
  const countryName = pathname?.substring(pathname.lastIndexOf("/") + 1);

  let cities;
  if (countryName) {
    const cities = prisma.country.findMany();
  }

  let content = cities?.map((city: any) => {
    return <CityListItem key={city.id} city={city} />;
  });

  return <Fragment>{content}</Fragment>;
};

export default Citylist;
