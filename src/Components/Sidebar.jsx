import React from "react";
import profile from "../assets/image.jpeg";
import { BsFillCalendarMinusFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className=" w-[25%] h-full bg-white p-4">
      <div className="flex gap-4 items-center  pb-10 border-b-4 border-[#977EFE] ">
        <div>
          <img
            src={profile}
            alt=""
            className="w-[60px] h-[60px] rounded-[50%] border-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] text-gray-400 font-medium">Do-it</span>
          <span className="text-[20px] font-semibold text-[#977EFE]">
            Hardik Negi
          </span>
        </div>
      </div>
      <div className="flex items-center gap-8 justify-center py-12">
        <BsFillCalendarMinusFill color="#977EFE" />
        <span className="text-gray-400 font-medium text-lg">Today Tasks</span>
      </div>
      
    </div>
  );
};

export default Sidebar;
