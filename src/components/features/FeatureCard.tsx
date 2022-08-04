import React from "react";
import { IFeatureItem } from "../../models/models";

function FeatureCard(props: IFeatureItem) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-white mb-2 sm:mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current " fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={props.icon} />
        </svg>
      </div>
      <p className="text-white text-center mb-2">{props.text}</p>
    </div>
  );
}

export default FeatureCard;
