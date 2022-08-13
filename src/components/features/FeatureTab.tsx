import React, { useState } from "react";
import { IFeatureTab } from "../../models/models";
import FeatureCard from "./FeatureCard";

interface IFeatureTabProps {
  activeTab: number;
  features: IFeatureTab[];
}
function FeatureTab(props: IFeatureTabProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(props.activeTab);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setActiveTabIndex(Number(e.currentTarget.id));
  }

  return (
    <>
      <div className="flex items-center -mx-4 mb-10 md:mb-16 space-x-2 overflow-x-auto overflow-y-hidden justify-center flex-wrap">
        {props.features.map((feature, index) => (
          <button
            onClick={handleClick}
            className={`font-semibold text-xl lg:text-2xl flex items-center flex-shrink-0 px-5 py-2 ${
              index === activeTabIndex ? "text-white" : "text-gray-400"
            } `}
            key={`feature-${index}`}
            id={index.toString()}
          >
            {feature.header}
          </button>
        ))}
      </div>

      <div className={`grid sm:grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-16`}>
        {props.features[activeTabIndex].items.map((item, index) => (
          <FeatureCard icon={item.icon} text={item.text} key={`feature-item-${index}`} />
        ))}
      </div>
    </>
  );
}

export default FeatureTab;
