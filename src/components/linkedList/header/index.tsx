import { LLHeaderButtons } from "./Buttons";
import LLHeaderDropdown from "./Dropdown";

const LinkedListHeader = () => {
  return (
    <div className="flex w-full py-3 items-center justify-center bg-primary/75 text-primary-foreground">
      <div className="flex flex-col sm:flex-row px-10 md:p-0 gap-8 w-full max-w-7xl items-center">
        {/* TODO: work later for different type of linkedlist */}
        {/* <LLHeaderDropdown /> */}
        <LLHeaderButtons />
      </div>
    </div>
  );
};

export default LinkedListHeader;
