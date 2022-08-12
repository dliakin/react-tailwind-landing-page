import React from "react";
import { IStatItem } from "../../models/models";

function Stats({ statItems }: { statItems: IStatItem[] }) {
  return (
    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 mt-[80px]">
      {statItems.map((item: IStatItem, index: number) => (
        <div className="flex flex-row justify-center items-center" key={"statItem-" + index}>
          <p className="text-[#ED7138] font-semibold text-7xl ">{item.statNumber}</p>
          <p className="text-[#0F1214] font-normal text-base tracking-[0.005em] text-left ml-4">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
