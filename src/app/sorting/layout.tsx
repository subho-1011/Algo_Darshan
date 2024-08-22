import { Metadata } from "next";
import SortingHeader from "./SortingNavbar";
import { SortingContextProvider } from "@/contexts";

export const metadata: Metadata = {
  title: {
    absolute: "Sorting Algorithms | Algo Darshan",
  },
  description: "Implement various sorting algorithms",
};

const SortingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SortingContextProvider>
      <div className="flex flex-col w-full">
        <SortingHeader />
        <div className="flex w-full items-center justify-center">
          {children}
        </div>
      </div>
    </SortingContextProvider>
  );
};

export default SortingLayout;
