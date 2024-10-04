import React from "react";
import CardDisplay from "./CardDisplay";
import Menu from "./Menu";

const MainPage = () => {
  return (
    <div className="bg-[#FCFBFC] flex flex-col flex-1 ">
      <Menu />

      <CardDisplay />
    </div>
  );
};

export default MainPage;
