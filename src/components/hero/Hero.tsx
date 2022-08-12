import React from "react";
import ImgApp from "./javascript anim.png";
import ImgDots from "./background dots.png";
import ImgVector from "./Vector.png";

import Card from "../cards/Card";

function Hero() {
  return (
    <div className="bg-[#7B72FE] bg-[url('./components/hero/circle.png')] bg-no-repeat bg-bottom-10 bg-55% rounded-l-[40px] mt-[100px] ml-[160px]">
      <div className="flex flex-wrap">
        <div className="w-1/2 flex flex-col justify-top pt-[65px] pl-[95px]">
          <h1 className="text-white text-[54px] font-semibold leading-[130%] tracking-[0.01em]">
            Профессия
            <br />
            Frontend — разработчик
          </h1>

          <p className="text-white text-[30px] font-semibold leading-[140%] tracking-[0.005em] mt-[40px] max-w-[720px]">
            Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов
          </p>
          <p className="text-white text-[18px] font-normal leading-[150%] tracking-[0.005em] mt-[26px] max-w-[700px]">
            Начиная с основ изучишь JavaScript, разберешься с самыми популярными технологиями, научишься писать Frontend на фреймворке и связывать его с
            Backend. <strong>Навыки после курса оцениваются от 100 т.р.</strong>
          </p>
          <button className="mt-[60px] bg-[#ED7138] rounded-[50px] px-[40px] py-[28px] text-white text-[18px] font-normal leading-[100%] max-w-[325px]">
            Задать вопрос об обучении
          </button>
        </div>

        <div className="w-1/2 flex justify-end ">
          <div className="relative z-9 top-12 left-20">
            <img src={ImgDots} loading="lazy" alt="" />
            <div className="absolute left-[-70px] top-[510px] z-20">
              <Card maxWidth={"max-w-[396px]"}>
                <p>
                  <span className="text-[#ED7138]">Обучение </span>
                  <span className="text-[#0F1214]">для тех, </span>
                  <span className="text-[#979EA2]">кто готов учиться 10 часов в неделю, </span>
                  <span className="text-[#ED7138]">чтобы получить результат. </span>
                  <span className="text-[#0F1214]">Мы даем </span>
                  <span className="text-[#979EA2]">необходимые навыки </span>
                  <span className="text-[#0F1214]">на продвинутом уровне, </span>
                  <span className="text-[#979EA2]">убирая все лишнее</span>
                </p>
              </Card>
            </div>
            <div className="absolute top-[460px] z-30 bg-[#7F76FF] p-5 rounded-3xl shadow-card">
              <img src={ImgVector} alt="" />
            </div>
          </div>
          <div className="mt-[95px] z-10">
            <img src={ImgApp} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
