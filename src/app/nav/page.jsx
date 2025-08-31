"use client";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul className="flex bg-[#00BF63] items-center justify-around fixed w-[100vw]">
        <div>
          <Link href="/">
            <li>
              <Image
                src="/hexlogo.png"
                width="150"
                height="100"
                alt="logo"
              ></Image>
            </li>
          </Link>
        </div>
        <div className="flex text-white gap-[20px]">
          <li className="flex">
            Lesson <RiArrowDropDownLine size={30} />
          </li>
          <li className="flex">
            Exam <RiArrowDropDownLine size={30} />
          </li>
          <Link href="/challenge/selectmode">
            <li>Challenge</li>
          </Link>
          <Link href="/login">
            <li>Leaderboard</li>
          </Link>
          <li className="flex items-center gap-3 mt-[-3px]">
            <Image src={"/fire.png"} width={20} height={20} alt="fire" className="mt-[-2px]"></Image>
            <p className="text-orange-700">20</p>
          </li>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/register">
            <li>Sign up</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
