"use client";

import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-[100vh] gap-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <Link href="/teacher/createclass/create">
          <div className="border-2 border-black rounded-2xl flex justify-center items-center w-[300px] h-[300px]">
            <FaPlus
              style={{ color: "black", width: "100px", height: "100px" }}
            />
          </div>
        </Link>
        <h1 className="text-black text-2xl">Create classroom</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <Link href="/teacher/createexam/create">
          <div className="border-2 border-black rounded-2xl flex justify-center items-center w-[300px] h-[300px]">
            <FaPlus
              style={{ color: "black", width: "100px", height: "100px" }}
            />
          </div>
        </Link>
        <h1 className="text-black text-2xl">Create exam</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <Link href={"/teacher/createslide/create"}>
          <div className="border-2 border-black rounded-2xl flex justify-center items-center w-[300px] h-[300px]">
            <FaPlus
              style={{ color: "black", width: "100px", height: "100px" }}
            />
          </div>
        </Link>
        <h1 className="text-black text-2xl">Create slide</h1>
      </div>
    </div>
  );
}
