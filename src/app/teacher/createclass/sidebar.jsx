"use client";
import { FaHome, FaClock, FaTrash, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { useBar } from "./context/Sidebarcontext";
import { useState } from "react";

export default function Sidebar() {
  const { changeStatus } = useBar();
  const [status, setStatus] = useState(false);
  return (
    <div className="flex flex-col mt-[-5%]">
      <button
        className="bg-white text-black p-[20px] rounded-2xl text-xl flex items-center gap-[10px]"
        onClick={() => {
          changeStatus(!status);
          setStatus(!status);
        }}
      >
        <FaPlus />
        <h1>เพิ่มคลาส</h1>
      </button>
      <nav>
        <ul className="w-[80%] text-black text-xl flex flex-col justify-center ml-auto mr-auto gap-[20px] mt-[30px]">
          <Link href="/teacher/createclass/create">
            <li className="flex items-center gap-2">
              <FaHome /> หน้าหลัก
            </li>
          </Link>
          <Link href="/teacher/createclass/recent">
            <li className="flex items-center gap-2">
              <FaClock />
              ล่าสุด
            </li>
          </Link>
          <Link href="/teacher/createclass/binclass">
            <li className="flex items-center gap-2">
              <FaTrash />
              ถังขยะ
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
