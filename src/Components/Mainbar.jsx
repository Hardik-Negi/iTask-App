import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Mainbar = () => {
  return (
    <div className="w-[75%] h-full justify-center items-center px-20 ">
      <div className="flex flex-col w-full  justify-center py-10 ">
        <span className="font-bold text-3xl text-left text-white">
          Today main focus{" "}
        </span>
        <span className="font-bold text-4xl text-left text-white">
          Design team meeting
        </span>
      </div>

      <div className="flex justify-center items-center ">
        <div className="h-14 w-full border flex bg-white rounded-2xl justify-start items-center gap-2 p-2">
          <div className="h-4 w-4 rounded-full border bg-[#F54CB4]"></div>
          <div className="h-4 w-4 rounded-full border bg-[#4DC6F5]"></div>
          <div className="h-4 w-4 rounded-full border bg-[#FAC508]"></div>
          <input
            type="text"
            className="w-3/4 outline-none pl-2 "
            placeholder="What is your next Task?"
          />
          <div className="flex pl-2 gap-2">
            <span className="cursor-pointer"><RiEdit2Fill size={20} /></span>
            <span className="cursor-pointer"><MdDelete size={20} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
