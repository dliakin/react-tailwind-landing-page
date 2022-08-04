import React from "react";
import FeatureTab from "./FeatureTab";
import { IFeature } from "../../models/models";

const features: IFeature[] = [
  {
    header: "SKILL UPGRADE",
    items: [
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        text: "Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков",
      },
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        text: "Твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше ",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        text: "Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior ",
      },
    ],
  },
  {
    header: "STRONG HARD SKILLS",
    items: [
      {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        text: "Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        text: "Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend",
      },
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        text: "Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript",
      },
    ],
  },
];

function Features() {
  return (
    <div className="bg-[#0F1214] py-6 sm:py-8 lg:py-12 rounded-2xl m-8">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-4">
          <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Что тебе даст прохождение курса?</h2>
        </div>
        <FeatureTab features={features} activeFeature={0}></FeatureTab>
      </div>
    </div>
  );
}

export default Features;
