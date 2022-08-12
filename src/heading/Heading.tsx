import React from "react";

function Heading({ title, subTitle, imgUrl, children }: { title: string; subTitle: JSX.Element; imgUrl?: string; children?: JSX.Element }) {
  return (
    <div className="bg-white mt-[117px] max-w-screen-2xl mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          {imgUrl && <img src={imgUrl} alt="" className="xl:mr-8" />}
          <h2 className="xl:text-54-70 font-bold text-[#0F1214] text-2xl text-center">{title}</h2>
        </div>
        <p className="mt-10 max-w-[970px] text-[#0F1214] text-center mx-auto font-normal xl:text-2xl">{subTitle}</p>
        {children}
      </div>
    </div>
  );
}

export default Heading;
