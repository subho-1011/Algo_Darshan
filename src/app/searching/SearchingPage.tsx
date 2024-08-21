"use client";

import SearchForm from "@/app/searching/SearchForm";
import LinearSearchCanvas from "@/app/searching/SearchCanvas";

const SearchingPage = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-7xl h-full my-10 gap-y-5">
        <SearchForm />
        <LinearSearchCanvas />
      </div>
    </>
  );
};

export default SearchingPage;
