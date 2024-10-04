import React from "react";
import ProfileImage from "./ProfileImage";
import image from "../assets/image.png";
import { FiUsers } from "react-icons/fi";
import Icon from "./Icon";
import { RxLightningBolt } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { CiPause1 } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="bg-[#FFFFFF] px-4 md:px-12 py-2 shadow-md w-full">
      <div className="flex flex-col gap-6 md:gap-[35px]">
        <div className="flex flex-col md:flex-row justify-between items-left p-4 md:p-[12px]">
          <div className="md:mr-6">
            <h1 className="text-[#000000] text-2xl md:text-3xl font-semibold leading-[45.99px] font-inter ">
              New Campaign Run{" "}
            </h1>
            <p className="text-[#B8B9BD] font-medium text-sm md:text-base leading-[16.94px] font-inter mt-1">
              A new campaign launch work for brand new feature in May month
            </p>
          </div>
          <div>
            <button className="bg-black text-white w-full md:w-[160px] p-2 mt-2  h-[41px] rounded-[8px] text-sm md:text-base font-medium font-inter">
              ADD MEMBERS
            </button>
          </div>
        </div>
        <div className="flex  md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center px-2 md:px-4">
              <ProfileImage src={image} alt="Profile Image" />
              <ProfileImage src={image} alt="Profile Image" />
              <ProfileImage src={image} alt="Profile Image" />
            </div>
            <div>
              <p className="text-sm md:text-base leading-[16.94px] font-medium text-[#B8B9BD] font-inter">
                8 members
              </p>
            </div>
          </div>
          <div className="">
            <ul className="text-sm md:text-base leading-[16.94px] font-medium font-inter flex justify-between gap-2 md:gap-6">
              <li className="flex gap-1 text-[#7D8088] items-center">
                <Icon icon={FiUsers} size={18} color="#7D8088" />
                <span className="hidden  lg:block"> Participants View</span>
              </li>
              <li className="flex gap-1 text-[#7D8088] items-center">
                <Icon icon={CiPause1} size={15} color="#7D8088" />
                <span className="hidden  lg:block"> Board View</span>
              </li>
              <li className="flex gap-1 text-[#7D8088] items-center">
                <Icon icon={AiOutlineUnorderedList} size={15} color="#7D8088" />
                <span className="hidden  lg:block">List View</span>
              </li>
              <li className="flex gap-1 text-[#7D8088] items-center">
                <Icon icon={RxLightningBolt} size={15} color="#7D8088" />
                <span className="hidden  lg:block">Power View</span>
              </li>
              <li
                className="flex gap-1 text-[#7D8088] items-center
"
              >
                <Icon icon={AiOutlinePlus} size={15} color="#7D8088" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
