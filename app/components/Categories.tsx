import Link from "next/link";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Link href="/">Asia</Link>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Link href="/">Europe</Link>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Link href="/">North America</Link>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Link href="/">South America</Link>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Link href="/">Africa</Link>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Link href="/">Austalia & Oceania</Link>
      </div>
    </div>
  );
};

export default Categories;
