import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddTaskButton() {
  return (
    <button className="border-dashed border-2 border-gray-300 bg-gray-100 text-[#7D8088] font-noraml text-[16px] font-inter py-3  rounded-md inline-flex items-center justify-center gap-2 outline-none">
      <AiOutlinePlus size={20} />
      <span>Add Task</span>
    </button>
  );
}

export default AddTaskButton;
