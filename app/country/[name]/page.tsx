import LivingCostTable from "@/app/components/ui/LivingCostTable";
import { headers } from "next/headers";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import Citylist from "@/app/components/cities/Citylist";

const prisma = new PrismaClient();

const CountryPage = async () => {
  const headerList = headers();
  const pathname = await headerList.get("x-url");
  const countryName = pathname?.substring(pathname.lastIndexOf("/") + 1);

  // db fetching

  // country info
  let country;
  if (countryName) {
    country = await prisma.country.findFirst({
      where: {
        name: countryName,
      },
    });
  }

  console.log(country);

  //country costs of living
  let countryCosts;
  if (countryName) {
    countryCosts = await prisma.country_costs.findFirst({
      where: {
        country_name: countryName,
      },
    });
  }

  console.log(countryCosts);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[32vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/images/sunrise.jpg"
          className="object-cover w-full h-full"
          alt="China"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{countryName}</h1>
          <span className="mt-6 block text-lg text-gray-600">
            Cost of leaving - {country?.costs}$/monthly
          </span>
          <p className="my-4">Description of a place and other attractions.</p>
          <div className="oy-6 col-span-3">
            <Citylist />
          </div>
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/images/user.png"
              width={50}
              height={50}
              className="rounder-full"
              alt="User Name"
            />
            <p>
              <strong>John Doe, </strong>March/15/2024
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            error neque quibusdam assumenda iusto, nam possimus placeat quidem
            corrupti. Aperiam dolorum ullam id minima atque repudiandae
            accusantium ut mollitia delectus.
          </p>
        </div>

        <LivingCostTable report={{ id: "fds", costs: 234 }} userId={"dsa"} />
      </div>
    </main>
  );
};

export default CountryPage;
