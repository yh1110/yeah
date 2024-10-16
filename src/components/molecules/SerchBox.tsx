import { Search } from "lucide-react";

export const SerchBox = () => {
  return (
    <div className="relative flex-grow max-w-xl mx-4">
      <input
        type="text"
        placeholder="検索"
        className="w-full pl-10 pr-4 py-2 rounded-full border border-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-300 bg-primary-100"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};
