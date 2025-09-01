"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center h-[100vh] gap-30">
      <Link href={`/challenge/selectlevel/${id}`}>
        <div className="flex flex-col justify-center items-center h-[500px] gap-10 p-10 rounded-2xl shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)]">
          <h1 className="text-2xl text-black">PRACTICE</h1>
          <Image
            src={"/practice.png"}
            width={340}
            height={340}
            alt="mode"
          ></Image>
        </div>
      </Link>
      <Link href={`/challenge/selectlevel/${id}`}>
        <div className="flex flex-col justify-center items-center h-[500px] gap-10 p-10 rounded-2xl shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)]">
          <h1 className="text-2xl text-black">TASK</h1>
          <Image src={"/task.png"} width={340} height={340} alt="mode"></Image>
        </div>
      </Link>
    </div>
  );
}
