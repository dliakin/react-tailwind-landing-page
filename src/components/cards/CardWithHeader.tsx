import React from "react";

function CardWithHeader({ header, children, maxWidth }: { header: string; children: JSX.Element; maxWidth?: string }) {
  return (
    <div className={`bg-white border border-solid border-[#947EFF] rounded-2xl shadow-cardWithHeader 1450px:w-max ${maxWidth ? maxWidth : "max-w-prose"}`}>
      <div className="flex flex-col items-left justify-center my-6 mx-5">
        <h3 className="font-semibold text-sm uppercase text-[#9088FF]">{header}</h3>
        {children}
      </div>
    </div>
  );
}

export default CardWithHeader;
