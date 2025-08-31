"use client";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Createpopup() {
  return (
    <div className="absolute bg-white w-[40vw] h-[65vh] rounded-2xl p-5 border-3 border-black ">
      <h1 className="text-black text-2xl font-bold">ห้องเรียนใหม่</h1>
      <div className="flex justify-center gap-20 mt-5">
        <div className="flex flex-col">
          <div className="flex mt-2 gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-black">ชื่อห้องเรียน</p>
              <input
                type="text"
                className="border-2 border-[#4251FF] h-[45px] rounded-[5px] text-black"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-black">จำนวน</p>
              <input
                type="number"
                className="border-2 border-[#4251FF] h-[45px] w-[45px] rounded-[5px] text-black"
              ></input>
            </div>
          </div>
          <div className="flex mt-2 gap-4 items-end">
            <div className="flex flex-col gap-3">
              <p className="text-black">อัพโหลดสไลด์</p>
              <input
                type="text"
                className="border-2 border-[#4251FF] h-[45px] rounded-[5px] text-black"
              ></input>
            </div>
            <div className="flex flex-col gap-3 h-[45px] w-[45px] items-center justify-center border-[#4251FF] border-2 rounded-[5px]">
              <FaPlus style={{ color: "black" }} />
            </div>
          </div>
          <div className="flex mt-2 gap-4 items-end">
            <div className="flex flex-col gap-3">
              <p className="text-black">สร้างรหัสผ่าน</p>
              <input
                type="password"
                className="border-2 border-[#4251FF] h-[45px] rounded-[5px] text-black"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-black">สร้างคำเชิญ</h2>
          <Image src={"/qr.png"} width={150} height={150}></Image>
          <h2 className="text-blue-950">บันทึก QR code</h2>
          <button className="bg-purple-600 text-white p-2 rounded-[10px] flex items-center justify-center gap-3">
            <MdOutlineContentCopy />
            คัดลอกลิงก์
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[30px] mt-10">
        <button className="bg-purple-600 p-2 rounded-[10px] w-30">
          ยกเลิก
        </button>
        <button className="bg-purple-600 p-2 rounded-[10px] w-30">สร้าง</button>
      </div>
    </div>
  );
}
