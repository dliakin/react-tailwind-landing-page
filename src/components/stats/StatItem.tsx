import React from "react";
import { IStatItem } from "../../models/models";

function StatItem(item: IStatItem) {
  return (
    <div className="flex lg:flex-row lg:justify-center lg:items-center flex-col justify-start">
      <p className="text-[#ED7138] font-semibold text-7xl">{item.statValue}</p>
      <p className="text-[#0F1214] font-normal text-base tracking-[0.005em] lg:text-left lg:ml-4">{item.text}</p>
    </div>
  );
}

export default StatItem;
