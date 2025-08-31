"use client"

import Image from "next/image"
import Link from "next/link"

export default function page() {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-15">
        <div>
            <Image src={"/profile.jpg"} width={200} height={200} alt="profile" className="rounded-[100%]"></Image>
        </div>
        <div className="text-black text-4xl">
            <h1>select your path</h1>
        </div>
        <div className="flex justify-center items-center gap-10">
           <Link href={"/challenge/selectlesson"}><button className="bg-green-500 p-5 text-3xl rounded-2xl">BEGINER</button></Link>
           <Link href={"/challenge/selectlesson"}><button className="bg-green-500 p-5 text-3xl rounded-2xl">INTERMEDIATE</button></Link>
           <Link href={"/challenge/selectlesson"}><button className="bg-green-500 p-5 text-3xl rounded-2xl">ADVANCED</button></Link>
        </div>
    </div>
  )
}
