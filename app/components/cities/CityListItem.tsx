import { CityType } from "./Citylist";
import Link from "next/link";
import Image from "next/image";
import AsiaImg from "@/public/images/asia.jpg";

interface CityProps {
  city: CityType;
}

const CityListItem: React.FC<CityProps> = async ({ city }) => {
  return (
    <Link href={`/city/${city.name}`}>
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
          <p className="text-lg font-bold">{city.name}</p>
        </div>

        <div className="mt-2 ">
          <p className="text-sm text-gray-500">
            Avg cost of living: <strong>{city.costs}$/month</strong>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CityListItem;
