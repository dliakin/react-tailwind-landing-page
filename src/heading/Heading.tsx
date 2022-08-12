import React from "react";

import ImgQuestion from "./question 1.png";
import ImgProject from "./project.png";
import Card from "../components/cards/CardWithHeader";

function Heading() {
  return (
    <div className="bg-white mt-[117px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          <img src={ImgQuestion} alt="" className="" />
          <h2 className="text-54-70  font-bold text-[#0F1214] ml-8">Как именно ты станешь разработчиком</h2>
        </div>
        <p className="mt-10 max-w-[970px] text-[#0F1214]  text-center mx-auto font-normal text-2xl">
          На курсе ты не просто изучаешь теоретический материал. в процессе изучения ты повторяете за действующим разработчиком, после чего{" "}
          <strong>закрепляешь знания на заданиях и проектах.</strong>
        </p>
        <div className="flex flex-col relative  mt-16">
          <img src={ImgProject} alt="" />
          <div className="absolute left-[-300px] top-28 z-20">
            <Card header="2 Командных проекта" maxWidth={"max-w-[325px]"}>
              <>
                <p className="mt-3 text-sm color-[#0F1214] leading-[170%]">
                  Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки для будущей работы.
                </p>
                <p className="mt-3 text-sm color-[#0F1214] leading-[170%]">
                  <strong>Проекты на тему:</strong>
                  <br />- JavaScript плагин "Контекстное меню"
                  <br />- Cайт на React, презентующий команду участников
                </p>
              </>
            </Card>
          </div>
          <div className="absolute left-[710px] top-[215px] z-30">
            <Card header="Индивидуальные проекты" maxWidth={"max-w-[390px]"}>
              <p className="mt-3 text-sm color-[#0F1214] leading-[170%]">
                Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.
                <br />
                Вы создадите 3 проекта изучая материал от простого к сложному:
                <br />
                <br />
                1. Проект корзина с товарами для интернет-магазина
                <br />
                2. Социальная сеть для поиска и знакомств
                <br />
                3.Дипломный проект на выбранную вами тему: <br />- Учет доходов и рассходов <br />- Бронирование отелей <br />- Интернет-магазин или схожий по
                сложности проект, которым вы выберети и утвердите с куратором
              </p>
            </Card>
          </div>
        </div>
        <a href="/" className="mt-10 text-[#0F1214] font-normal text-sm">
          Проекты учеников
        </a>
      </div>
    </div>
  );
}

export default Heading;
