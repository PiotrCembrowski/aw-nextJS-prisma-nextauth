import Link from "next/link";

interface ContinentsProps {
  dataContinents: string;
  setContinents: (country: string) => void;
}

const Continents: React.FC<ContinentsProps> = ({
  dataContinents,
  setContinents,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-10">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
          <span className="text-sm">Asia</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
          <span className="text-sm">Europe</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
          <span className="text-sm">North America</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
          <span className="text-sm">South America</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
          <span className="text-sm">Africa</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
          <span className="text-sm">Austalia & Oceania</span>
        </div>
      </div>
    </>
  );
};

export default Continents;
