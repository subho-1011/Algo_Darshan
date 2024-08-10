import { Metadata } from "next";
import TowerOfHanoi from "@/components/backtracking/towerOfHanoi";
import * as providers from "@/contexts";

export const metadata: Metadata = {
  title: {
    absolute: "Tower of Hanoi",
  },
  description:
    "Learn about the Tower of Hanoi algorithm and its applications in various fields",
};

const TowerOfHanoiPage = () => {
  return (
    <providers.TowerOfHanoiProvider>
      <TowerOfHanoi />
    </providers.TowerOfHanoiProvider>
  );
};

export default TowerOfHanoiPage;
