import React from "react";
import ImgApp from "./app.png";
import ImgDots from "./dots.png";
import ImgVector from "./vector.png";

import Card from "../cards/Card";

function Hero() {
  return (
    <div className="bg-[#7B72FE] bg-[url('./components/hero/circle.png')] bg-no-repeat bg-bottom-10 bg-44% rounded-l-[40px]  lg:mt-[100px] lg:ml-[160px] md:mx-auto ">
      <div className="flex flex-wrap ">
        <div className="lg:w-1/2 flex flex-col justify-top lg:pt-[65px] lg:pl-[95px]  p-[20px]">
          <h1 className="text-white 2xl:text-[54px] font-semibold 2xl:leading-[130%] 2xl:tracking-[0.01em] text-4xl">
            Профессия
            <br />
            Frontend — разработчик
          </h1>

          <p className="text-white 2xl:text-[30px] font-semibold 2xl:leading-[140%] 2xl:tracking-[0.005em] mt-[40px] max-w-[740px] text-xl">
            Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов
          </p>
          <p className="text-white 2xl:text-[18px] font-normal 2xl:leading-[150%] 2xl:tracking-[0.005em] mt-[26px] max-w-[700px] text-sm">
            Начиная с основ изучишь JavaScript, разберешься с самыми популярными технологиями, научишься писать Frontend на фреймворке и связывать его с
            Backend. <strong>Навыки после курса оцениваются от 100 т.р.</strong>
          </p>
          <button className="mt-[60px] bg-[#ED7138] rounded-[50px] px-[40px] py-[28px] text-white text-[18px] font-normal leading-[100%] max-w-[325px]">
            Задать вопрос об обучении
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end items-end">
          <div className="relative hidden md:block">
            <div className="absolute z-10 2xl:top-[-630px] xl:top-[-528px] lg:top-[-350px] lg:left-[5px] top-[-630px] left-[-45px] ">
              <img src={ImgDots} loading="lazy" alt="Decorative element dots" className="max-w-fit" />
            </div>

            <div className="absolute z-30 top-[-100px] lg:left-[-10px] left-[250px]">
              <Card maxWidth={"max-w-[396px]"}>
                <p>
                  <span className="text-[#ED7138]">Обучение </span>
                  <span className="">для тех, </span>
                  <span className="text-[#979EA2]">кто готов учиться 10 часов в неделю, </span>
                  <span className="text-[#ED7138]">чтобы получить результат. </span>
                  <span className="">Мы даем </span>
                  <span className="text-[#979EA2]">необходимые навыки </span>
                  <span className="">на продвинутом уровне, </span>
                  <span className="text-[#979EA2]">убирая все лишнее</span>
                </p>
              </Card>
            </div>
            <div className="absolute z-40 top-[-150px] lg:left-[11px] left-[350px] bg-[#7F76FF] p-5 rounded-3xl shadow-card w-fit h-fit">
              <img src={ImgVector} alt="Decorative element symbols" className="max-w-fit" />
            </div>
          </div>
          <div className="z-20 mt-[95px] lg:ml-[50px] overflow-hidden">
            <img src={ImgApp} loading="lazy" alt="Application screenshot" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
