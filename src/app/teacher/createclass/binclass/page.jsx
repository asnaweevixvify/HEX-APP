"use client";

import { useState } from "react";
import Image from "next/image";

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
        <h1 className="text-black text-2xl">ถังขยะ</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <Image src={"/ถังขยะว่าง.png"} width={200} height={200}></Image>
          <h1 className="text-black text-xl">ถังขยะว่างเปล่า</h1>
        </div>
      </div>
    </div>
  );
}
