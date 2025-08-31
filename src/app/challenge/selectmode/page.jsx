"use client"

import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
   <div className="flex justify-center items-center h-[100vh] gap-30">
    <Link href="/challenge/selectlevel">
      <div className="flex flex-col justify-center items-center h-[500px] gap-10 p-10 rounded-2xl shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)]">
          <h1 className="text-2xl text-black">GENERAL</h1>
          <Image src={"/general.png"} width={340} height={340} alt="mode"></Image>
      </div>
    </Link>
    <Link href="/challenge/practicerequest">
    <div className="flex flex-col justify-center items-center h-[500px] gap-10 p-10 rounded-2xl shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)]">
        <h1 className="text-2xl text-black">MATH + CALCULATOR</h1>
        <Image src={"/mathcal.png"} width={400} height={400} alt="mode"></Image>
    </div></Link>
   </div>
  )
}