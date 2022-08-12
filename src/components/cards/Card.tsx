import React from "react";

function Card({ children, maxWidth }: { children: JSX.Element; maxWidth?: string }) {
  return <div className={`bg-white py-10 px-6 rounded-3xl shadow-card w-max ${maxWidth ? maxWidth : "max-w-prose"}`}>{children}</div>;
}

export default Card;
