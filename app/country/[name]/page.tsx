import LivingCostTable from "@/app/components/cities/LivingCostTable";
import { headers } from "next/headers";
import Image from "next/image";

const CountryPage = async ({ params }: { params: { id: string } }) => {
  const headerList = headers();
  const pathname = await headerList.get("x-url");
  const lastPart = pathname.substring(pathname.lastIndexOf("/") + 1);
  console.log(lastPart);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/images/sunrise.jpg"
          className="object-cover w-full h-full"
          alt="China"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Maledives</h1>
          <span className="mt-6 block text-lg text-gray-600">
            Cost of leaving - 200$/monthly
          </span>
          <p className="my-4">Description of a place and other attractions.</p>
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
