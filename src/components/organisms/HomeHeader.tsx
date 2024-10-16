import { HeaderNavs } from "../molecules/HeaderNavs";
import { SerchBox } from "../molecules/SerchBox";

export const HomeHeader = () => {
  return (
    <header className="bg-primary-300 border-b shadow-sm border-border-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-secondary-300">Yeah!</h1>
        <SerchBox />
        <HeaderNavs />
      </div>
    </header>
  );
};
