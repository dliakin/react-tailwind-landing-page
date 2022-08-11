import React from "react";

function Stats() {
  return (
    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
      <div className="flex flex-row justify-center items-center">
        <p className="text-[#ED7138] font-semibold text-7xl ">293</p>
        <p className="text-[#0F1214] font-normal text-base tracking-[0.005em] text-left ml-4">
          HD видеоурока <br />
          длительностью 3 - 15 минут
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="text-[#ED7138] font-semibold text-7xl ">6</p>
        <p className="text-[#0F1214] font-normal text-base tracking-[0.005em] text-left ml-4">
          мероприятий на курсе (Хакатоны,
          <br /> мастер классы, разборы и т.д.)
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="text-[#ED7138] font-semibold text-7xl ">193</p>
        <p className="text-[#0F1214] font-normal text-base tracking-[0.005em] text-left ml-4">
          заданий и тестов <br /> для закрепления
        </p>
      </div>
    </div>
  );
}

export default Stats;
