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
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        asd
      </div>
    </>
  );
};

export default Continents;
