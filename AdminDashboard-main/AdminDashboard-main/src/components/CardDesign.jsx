import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FiLink2 } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbListCheck } from "react-icons/tb";
import ProfileImage from "./ProfileImage";
import image from "../assets/image.png";
const CardDesign = ({ progressColor, progress }) => {
  const progressWidth = `${progress}%`;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md font-inter p-[16px] flex flex-col">
      <div className="py-2">
        <h2 className="text-16 font-[600] leading-5 flex justify-between">
          Usability testing
          <HiOutlineDotsVertical color="#B8B9BD" />
        </h2>
        <p className="text-gray-400 text-[14px] leading-[17px] font-[400] font-[inter] mt-1">
          Make clear design and color
        </p>
        <div className="flex justify-between text-[14px] leading-[17px] font-[400] font-[inter] mt-1">
          <p className="flex gap-2 items-center text-[#B8B9BD] ">
            <TbListCheck /> Progress
          </p>
          <p className="font-[500]">2/10</p>
        </div>
        <div className="bg-gray-300 h-2 rounded-full mt-1">
          <div
            className={`h-full rounded-full ${progressColor}`}
            style={{ width: progressWidth }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <div className="flex gap-4 text-[#B8B9BD] text-[12px] ">
            <p className="flex gap-1 items-center text-[#B8B9BD] text-[12px] ">
              <AiOutlineMessage size={17} />7
            </p>
            <p className="flex gap-1 items-center">
              <FiLink2 size={17} /> 2
            </p>
          </div>
          <div className="flex items-center">
            <ProfileImage src={image} alt="Profile Image" />
            <ProfileImage src={image} alt="Profile Image" />
            <ProfileImage src={image} alt="Profile Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
