import SearchProvider from "@/app/searching/SearchProvider";
import SearchingNavbar from "@/app/searching/SearchingNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Search Algorithms | Algo Darshan",
  },
  description: "Implement various search algorithms",
};

const SearchingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SearchProvider>
      <div className="flex flex-col w-full">
        <SearchingNavbar />
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </SearchProvider>
  );
};

export default SearchingLayout;
