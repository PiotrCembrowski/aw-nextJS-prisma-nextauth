import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5 " />
          <img src="../app/images/user.png" alt="Image of the user" />
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserNav;
