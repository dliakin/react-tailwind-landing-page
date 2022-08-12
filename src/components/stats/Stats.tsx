import React from "react";
import { IStatItem } from "../../models/models";
import StatItem from "./StatItem";

function Stats({ statItems }: { statItems: IStatItem[] }) {
  return (
    <div className="container mx-auto grid justify-center grid-cols-1 text-center sm:grid-cols-3 mt-[80px]">
      {statItems.map((item: IStatItem, index: number) => (
        <StatItem statValue={item.statValue} text={item.text} key={`stat-item-${index}`} />
      ))}
    </div>
  );
}

export default Stats;
