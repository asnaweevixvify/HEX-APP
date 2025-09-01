import React from "react";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="flex flex-col h-[100vh] justify-center items-center gap-[60px]">
        <div>
          <div className="flex justify-center items-center w-[60vw]">
            <div className="bg-green-600 w-[40%] h-[20px]"></div>
            <Image
              src={"/head.png"}
              width={50}
              height={50}
              alt="img"
              className="absolute left-[34%]"
            ></Image>
            <div className="bg-gray-200 w-[60%] h-[20px]"></div>
            <Image
              src={"/bufhead.png"}
              width={60}
              height={60}
              alt="img"
              className="absolute left-[69%]"
            ></Image>
          </div>
        </div>
        <Image
          src={"/hcal.png"}
          width={400}
          height={150}
          alt="img"
          className="w-[30vw]"
        ></Image>
        <div className="flex justify-center items-center gap-10">
          <div className="border-2 border-green-600 p-3 rounded-2xl h-70 flex items-center">
            <Image src={"/ex3.png"} width={500} height={150} alt="img"></Image>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[450px] h-[100px] border-2 border-green-500 flex justify-center items-center">
              <h1 className="text-green-600 text-2xl">Answer....</h1>
            </div>
            <div className="flex justify-center items-center gap-13">
              <div className="border-2 border-green-600 w-[200px] h-[50px] flex justify-center items-center">
                <h1 className="text-black text-center">2.61</h1>
              </div>
              <div className="border-2 border-green-600 w-[200px] h-[50px] flex justify-center items-center">
                <h1 className="text-black text-center">2.51</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-13">
              <div className="border-2 border-green-600 w-[200px] h-[50px] flex justify-center items-center">
                <h1 className="text-black text-center">20</h1>
              </div>
              <div className="border-2 border-green-600 w-[200px] h-[50px] flex justify-center items-center">
                <h1 className="text-black text-center">10</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Link href={"/challenge/game/cal/round5"}>
          <GrLinkNext
            style={{
              color: "black",
              width: "70px",
              height: "70px",
              position: "absolute",
              bottom: "120px",
              right: "280px",
              cursor: "pointer",
              zIndex: "999",
            }}
          />
        </Link>
        <Image src={"/bcal.png"} width={250} height={450} alt="img"></Image>
      </div>
      <Image
        src={"/grass.png"}
        width={2000}
        height={150}
        alt="img"
        className="w-[100vw] fixed bottom-0"
      ></Image>
    </div>
  );
}
