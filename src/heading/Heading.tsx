import React from "react";

function Heading() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Как именно ты станешь разработчиком</h2>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          На курсе ты не просто изучаешь теоретический материал. в процессе изучения ты повторяете за действующим разработчиком, после чего закрепляешь знания
          на заданиях и проектах.
        </p>
      </div>
    </div>
  );
}

export default Heading;
