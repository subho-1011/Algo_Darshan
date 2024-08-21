import * as provider from "@/contexts";

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <provider.NoOfElementsProvider>
      <provider.ArrayProvider>
        <provider.SpeedProvider>
          <provider.SearchingProvider>{children}</provider.SearchingProvider>
        </provider.SpeedProvider>
      </provider.ArrayProvider>
    </provider.NoOfElementsProvider>
  );
};

export default SearchProvider;
