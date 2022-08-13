import React from "react";
import { IFeatureTab } from "../../models/models";
import FeatureTab from "./FeatureTab";

function Features({ features, activeTab = 0, title = "" }: { features: IFeatureTab[]; activeTab?: number; title?: string }) {
  return (
    <div className="bg-[#0F1214] py-6 sm:py-8 lg:py-12 rounded-2xl m-8">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {title && (
          <div className="mb-4 sm:mb-10 md:mb-4">
            <h2 className="text-white text-2xl lg:text-54-70 font-bold text-center mb-4 md:mb-6">{title}</h2>
          </div>
        )}
        <FeatureTab features={features} activeTab={activeTab}></FeatureTab>
      </div>
    </div>
  );
}

export default Features;
