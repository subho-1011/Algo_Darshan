import SortingHeader from "@/components/sorting/SortingHeader";
import { SortingContextProvider } from "@/contexts";

const SortingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SortingContextProvider>
      <div className="flex flex-col w-full">
        <SortingHeader />
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </SortingContextProvider>
  );
};

export default SortingLayout;
