"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchingActions, useSearchingState } from "@/contexts";

const SearchForm = () => {
  const { inputValue, isPending } = useSearchingState();
  const { handleInputValue, handleSubmit } = useSearchingActions();

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center gap-x-3">
        <Label
          htmlFor="linear-search-input"
          className="block text-xl font-medium text-gray-700"
        >
          Enter the number to search:
        </Label>
        <Input
          type="number"
          className="w-24"
          value={inputValue}
          onChange={handleInputValue}
        />
        <Button
          text="Search"
          type="submit"
          variant="outline"
          disabled={isPending}
        />
      </form>
      <p></p>
    </>
  );
};

export default SearchForm;
