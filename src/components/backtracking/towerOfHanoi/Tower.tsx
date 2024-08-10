"use client";

import { TToworOfHanoiDisk } from "@/types";

const Tower = ({ arr, name }: { arr: TToworOfHanoiDisk[]; name: string }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-end h-[80%] border-b-4 border-purple-950">
        {arr.length > 0 &&
          arr.map((disk) => (
            <>
              <TowerDisk
                key={disk.id}
                width={disk.width}
                backgroundColor={disk.backgroundColor}
              />
              {disk.id}
            </>
          ))}
      </div>
      <div className="flex justify-center text-purple-800 text-2xl font-bold mt-2">
        {name}
      </div>
    </div>
  );
};

export default Tower;

const TowerDisk = ({
  width,
  backgroundColor,
}: {
  width: number;
  backgroundColor: string;
}) => {
  return (
    <div
      className="border-2 border-black h-12 rounded-full mb-1"
      style={{ width, backgroundColor }}
    />
  );
};
