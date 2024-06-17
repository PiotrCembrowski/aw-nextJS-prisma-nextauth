import Image from "next/image";
import AsiaImg from "@/public/images/asia.jpg";

const CountriesLisItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={AsiaImg}
          sizes="(max-width: 768px) 768px, (max-width: 1200px):768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="Asia"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Country Name</p>
      </div>

      <div className="mt-2 ">
        <p className="text-sm text-gray-500">
          <strong>Avg cost of living: 200$/month</strong>
        </p>
      </div>
    </div>
  );
};

export default CountriesLisItem;
