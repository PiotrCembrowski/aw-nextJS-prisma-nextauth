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
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-2">
        <div
          onClick={() => setContinents("Asia")}
          className={`py-2 px-4 flex flex-col text-center items-center space-y-2 border-2 ${
            dataContinents == "Asia" ? "border-gray-800" : "border-white"
          } rounded-3xl opacity-60 hover:opacity-100`}
        >
          <span className="text-xs">Asia</span>
        </div>
        <div
          onClick={() => setContinents("Europe")}
          className={`py-2 px-4 flex flex-col text-center items-center space-y-2 border-2 ${
            dataContinents == "Europe" ? "border-gray-800" : "border-white"
          } rounded-3xl opacity-60 hover:opacity-100`}
        >
          <span className="text-xs">Europe</span>
        </div>
        <div
          onClick={() => setContinents("North America")}
          className={`py-2 px-4 flex flex-col text-center items-center space-y-2 border-2 ${
            dataContinents == "North America"
              ? "border-gray-800"
              : "border-white"
          } rounded-3xl opacity-60 hover:opacity-100`}
        >
          <span className="text-xs whitespace-nowrap	">North America</span>
        </div>
        <div
          onClick={() => setContinents("South America")}
          className={`py-2 px-4 flex flex-col text-center items-center space-y-2 border-2 ${
            dataContinents == "South America"
              ? "border-gray-800"
              : "border-white"
          } rounded-3xl opacity-60 hover:opacity-100`}
        >
          <span className="text-xs whitespace-nowrap	">South America</span>
        </div>
        <div
          onClick={() => setContinents("Africa")}
          className={`py-2 px-4 flex flex-col text-center items-center space-y-2 border-2 ${
            dataContinents == "Africa" ? "border-gray-800" : "border-white"
          } rounded-3xl opacity-60 hover:opacity-100`}
        >
          <span className="text-xs">Africa</span>
        </div>
        <div
          onClick={() => setContinents("Austalia & Oceania")}
          className={`py-2 px-4 flex flex-col text-center items-center space-y-2 border-2 ${
            dataContinents == "Austalia & Oceania"
              ? "border-gray-800"
              : "border-white"
          } rounded-3xl opacity-60 hover:opacity-100`}
        >
          <span className="text-xs whitespace-nowrap">Austalia & Oceania</span>
        </div>
      </div>
    </>
  );
};

export default Continents;
