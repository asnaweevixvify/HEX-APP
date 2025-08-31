"use client";

import { FaFolder, FaFile } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function Page() {
  const [num, setNum] = useState([1, 2, 3]);
  return (
    <div className="w-[50vw] flex flex-col gap-[30px]">
      <input
        type="text"
        placeholder="🔍 ค้นหาคลาส"
        className="bg-[#CCCACA] rounded-3xl w-[100%] h-[50px] text-black flex items-center pl-[20px] mt-[40px] "
      ></input>
      <div className="w-[100%] bg-white h-[60vh] rounded-2xl flex flex-col p-5 gap-5">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center">
            <RiArrowDropDownLine style={{ color: "black" }} />
            <FaFolder style={{ color: "black" }} />
          </div>
          <div className="flex items-center justify-center gap-4">
            {num.map((e) => {
              return (
                <div className="flex justify-evenly items-center w-[100px] bg-gray-200 p-2 rounded-xl">
                  <FaFolder style={{ color: "black" }} />
                  <h2 className="text-black">ม.{e + 3}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center">
            <RiArrowDropDownLine style={{ color: "black" }} />
            <FaFile style={{ color: "black" }} />
          </div>
          <div className="flex items-center justify-center gap-4">
            {num.map((e) => {
              return (
                <div className="flex justify-evenly items-center w-[100px] bg-gray-200 p-2 rounded-xl">
                  <FaFile style={{ color: "black" }} />
                  <h2 className="text-black">ม.4/{e}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
