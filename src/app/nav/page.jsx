"use client";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul className="flex bg-[#00BF63] items-center justify-around">
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
          <Link href="/login">
            <li>Challenge</li>
          </Link>
          <Link href="/login">
            <li>Leaderboard</li>
          </Link>
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
