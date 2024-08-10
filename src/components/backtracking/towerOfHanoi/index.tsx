import Tower from "./Tower";
import TowersCanvas from "./TowersCanvas";

const TowerOfHanoi = () => {
  return (
    <div className="flex w-full max-w-7xl max-h-screen">
      <div className="flex flex-col gap-4 w-full justify-center items-center h-full">
        <TowersCanvas />
      </div>
    </div>
  );
};

export default TowerOfHanoi;
