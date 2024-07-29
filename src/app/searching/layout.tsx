import SearchingHeader from "@/components/searching/header";

const SearchingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      <SearchingHeader />
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default SearchingLayout;
