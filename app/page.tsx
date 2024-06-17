import Categories from "./components/Categories";
import CountriesList from "./components/countries/CountriesList";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <Categories />
      <CountriesList />
    </div>
  );
}
