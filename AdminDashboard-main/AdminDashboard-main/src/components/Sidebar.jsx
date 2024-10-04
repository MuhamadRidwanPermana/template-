import { useState } from "react";
import { RxLightningBolt } from "react-icons/rx";
import { TfiDashboard, TfiPlus } from "react-icons/tfi";
import { TbRadioactive } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSliderHorizontal } from "react-icons/ci";
import Icon from "./Icon";
import MainPage from "./MainPage";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <TfiDashboard size={20} color="#fff" /> },
    { title: "Settings", icon: <CiSliderHorizontal size={20} color="#fff" /> },
    {
      title: "Activites",
      icon: <RxLightningBolt size={20} color="#fff" />,
    },
    { title: "Users ", icon: <FiUsers size={20} color="#fff" /> },
    { title: "Added Users", icon: <AiOutlineUserAdd size={20} color="#fff" /> },
    { title: "Affiliates", icon: <TbRadioactive size={20} color="#fff" /> },
    {
      title: "Profile ",
      icon: <RxLightningBolt size={20} color="#fff" />,
      gap: true,
    },
    { title: "Logout", icon: <FiUsers size={20} color="#fff" /> },
  ];

  return (
    <div className="flex w-full">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-[#1D1042] min-h-screen flex flex-col justify-between px-2 py-10 relative duration-300`}
      >
        <img
          src="./src/assets/next.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#45269C] bg-white
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="bg-[#45269C] rounded-md mx-auto mb-4 flex items-center justify-center text-center p-[6px] ">
          {open && (
            <>
              <Icon icon={RxLightningBolt} size={20} color="#D4B2FF" />
              <h1 className="text-center p-2 text-white text-[12px] font-[400]">
                Welcome Keerthi
              </h1>
            </>
          )}
          {!open && <RxLightningBolt size={20} color="#D4B2FF" />}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ml-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <li>{Menu.icon}</li>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-auto mx-auto">
          <button className="bg-[#703EFE] text-white font-[400] text-[16px] p-[5px]  rounded flex items-center justify-center gap-2 focus:outline-none">
            {open && (
              <>
                <TfiPlus size={20} />
                <span>New Project</span>
              </>
            )}
            {!open && <TfiPlus size={20} />}
          </button>
        </div>
      </div>
      <div className="flex-1 ">
        <MainPage />
      </div>
    </div>
  );
};
export default Sidebar;
