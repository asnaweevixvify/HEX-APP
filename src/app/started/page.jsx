"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-[90px] gap-[60px]">
      <div className="flex flex-col items-center justify-center gap-[20px] p-[20px]">
        <Link href="teacher/selectmode">
          <Image
            src="/teacher.png"
            width={500}
            height={500}
            alt="teacher"
            className="w-[350px] h-[400px] border-2 border-black rounded-[50px] p-[20px]"
          ></Image>
        </Link>
        <h1 className="text-black font-bold text-2xl">Teacher</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-[20px] p-[20px]">
        <Link href="/teacher/selectmode">
          <Image
            src="/student.png"
            width={500}
            height={500}
            alt="teacher"
            className="w-[450px] h-[400px] border-2 border-black rounded-[50px] p-[20px]"
          ></Image>
        </Link>
        <h1 className="text-black font-bold text-2xl">Student</h1>
      </div>
    </div>
  );
}
