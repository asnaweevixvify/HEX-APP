"use client"
import Image from "next/image"

export default function page() {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-wrap gap-10">
      <div className="flex flex-col justify-around items-center shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)] rounded-2xl p-5 h-[400px]">
        <h1 className="text-2xl text-black">FUNCTION</h1>
        <Image src={"/function.jpg"} width={300} height={300} alt="lesson"></Image>
      </div>
      <div className="flex flex-col justify-around items-center shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)] rounded-2xl p-5 h-[400px]">
        <h1 className="text-2xl text-black">MATRIX</h1>
        <Image src={"/matrix.png"} width={300} height={300} alt="lesson"></Image>
      </div>
      <div className="flex flex-col justify-center gap-15 items-center shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)] rounded-2xl p-5 h-[400px]">
        <h1 className="text-2xl text-black">LOGIC</h1>
        <Image src={"/logic.png"} width={350} height={350} alt="lesson"></Image>
      </div>
      <div className="flex flex-col justify-around items-center shadow-[0px_4px_6px_7px_rgba(0,_0,_0,_0.1)] rounded-2xl p-5 h-[400px]">
      <h1 className="text-2xl text-black">TRIGONOMETRY</h1>
        <Image src={"/sincos.png"} width={300} height={300} alt="lesson"></Image>
      </div>
    </div>
  )
}
