import { CityType } from "./Citylist";

interface CityProps {
  city: CityType;
}

const CityListItem: React.FC<CityProps> = ({ city }) => {
  return <div>CityListItem</div>;
};

export default CityListItem;
