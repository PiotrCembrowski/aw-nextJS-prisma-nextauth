import Categories from "./components/ui/Categories";
import CountriesList from "./components/countries/CountriesList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />
      <div className="mt-4 mb-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <CountriesList />
      </div>
    </main>
  );
}
