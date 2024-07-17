import ArraySizeSlider from "./ArraySizeSlider";
import SpeedSlider from "./SpeedSilder";

const SortingHeaderSliders = () => {
  return (
    <div className="flex gap-12">
      <ArraySizeSlider />
      <SpeedSlider />
    </div>
  );
};

export default SortingHeaderSliders;
