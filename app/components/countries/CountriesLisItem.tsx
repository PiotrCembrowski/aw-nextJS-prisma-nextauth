import Image from "next/image";
import AsiaImg from "@/public/images/asia.jpg";
import { CountryType } from "./CountriesList";
import Link from "next/link";

interface CountryProps {
  country: CountryType;
}

const CountriesLisItem: React.FC<CountryProps> = ({ country }) => {
  return (
    <Link href={`/country/${country.name}`}>
      <div className="cursor-pointer">
        {/* <div className="relative overflow-hidden aspect-square rounded-xl">
          <Image
            fill
            src={AsiaImg}
            sizes="(max-width: 768px) 768px, (max-width: 1200px):768px, 768px"
            className="hover:scale-110 object-cover transition h-full w-full"
            alt="Asia"
          />
        </div> */}

        <div className="mt-2">
          <p className="text-lg font-bold">{country.name}</p>
        </div>

        <div className="mt-2 ">
          <p className="text-sm text-gray-500">
            Cost of living in {country.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountriesLisItem;
