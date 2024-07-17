import PlayButton from "./PlayButton";
import RandomizeButton from "./RandomizeButton";

const SortingHeaderButtons = () => {
  return (
    <div className="flex gap-4">
      <RandomizeButton />
      <PlayButton />
    </div>
  );
};

export default SortingHeaderButtons;
