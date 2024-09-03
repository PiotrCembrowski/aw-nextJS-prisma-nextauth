import Link from "next/link";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddReportButton from "./AddReportButton";
import { getUserCookie } from "@/action/getCookie";

const Navbar = async () => {
  const token = await getUserCookie();
  console.log(token);
  console.log("dada");

  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">Around the World</Link>

          <div className="flex space-x-6 ">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            <AddReportButton />
            <UserNav userId="asd" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
