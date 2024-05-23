import Link from "next/link";
import UserNav from "./UserNav";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/" className="w-32">
          AW
        </Link>
        <div className="rounded-full border px-5 py-2">search</div>
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
