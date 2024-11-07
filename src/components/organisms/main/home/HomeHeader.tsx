import { DrawerNav } from "@/components/atoms/Navigation";
import { HeaderNavs } from "../../../molecules/HeaderNavs";
import { SerchBox } from "../../../molecules/SerchBox";
import { Search } from "lucide-react";

export const HomeHeader = () => {
  return (
    <header className="bg-primary-300 border-b shadow-sm border-border-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between ">
        <div className="dt:hidden">
          <DrawerNav />
        </div>
        <h1 className="text-3xl font-bold text-secondary-300">Yeah!</h1>
        <Search className="text-text-200 dt:hidden" />
        <SerchBox />
        <div className="hidden dt:block">
          <HeaderNavs />
        </div>
      </div>
    </header>
  );
};
