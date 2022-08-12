import React from "react";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import Heading from "./heading/Heading";
import { IFeatureTab, IStatItem } from "./models/models";

const features: IFeatureTab[] = [
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

const statItems: IStatItem[] = [
  {
    statNumber: 293,
    text: ["HD видеоурока", <br />, "длительностью 3 - 15 минут"],
  },
  {
    statNumber: 6,
    text: ["мероприятий на курсе (Хакатоны,", <br />, "мастер классы, разборы и т.д.)"],
  },
  {
    statNumber: 193,
    text: ["заданий и тестов", <br />, "для закрепления"],
  },
];

function App() {
  return (
    <>
      <Hero />
      <Stats statItems={statItems} />
      <Heading />
      <Features features={features} />
    </>
  );
}

export default App;
