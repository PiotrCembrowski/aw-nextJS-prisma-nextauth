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
        <div
          onClick={() => setContinents("Asia")}
          className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
        >
          <span className="text-sm">Asia</span>
        </div>
        <div
          onClick={() => setContinents("Europe")}
          className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
        >
          <span className="text-sm">Europe</span>
        </div>
        <div
          onClick={() => setContinents("North America")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataContinents == "Asia" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100`}
        >
          <span className="text-sm">North America</span>
        </div>
        <div
          onClick={() => setContinents("South America")}
          className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
        >
          <span className="text-sm">South America</span>
        </div>
        <div
          onClick={() => setContinents("Africa")}
          className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
        >
          <span className="text-sm">Africa</span>
        </div>
        <div
          onClick={() => setContinents("Austalia & Oceania")}
          className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
        >
          <span className="text-sm">Austalia & Oceania</span>
        </div>
      </div>
    </>
  );
};

export default Continents;
