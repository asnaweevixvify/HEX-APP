"use client";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex justify-center items-center mt-10 gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-black text-3xl font-bold">
          เนื้อหาที่จะสร้างข้อสอบ
        </h1>
        <div className="flex flex-col bg-gray-300 w-[30vw] h-[60vh] rounded-2xl p-5 gap-3">
          <p className="text-black">เนื้อหาม.4</p>
          <div className="flex justify-start items-center gap-5">
            <button className="text-black bg-white p-2 rounded-[10px] w-[150px]">
              เซต
            </button>
            <button className="text-black bg-white p-2 rounded-[10px] w-[150px]">
              ตรรกศาสตร์
            </button>
          </div>
          <p className="text-black">เนื้อหาม.5</p>
          <div className="flex justify-start items-center gap-5">
            <button className="text-black bg-white p-2 rounded-[10px] w-[150px]">
              ฟังก์ชันตรีโกณมิติ
            </button>
            <button className="text-black bg-white p-2 rounded-[10px] w-[150px]">
              เมทริกซ์
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={"/goosetext.png"}
          width={300}
          height={300}
          alt="goose"
        ></Image>
      </div>
    </div>
  );
}
