"use client"

import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh] gap-30">
        <div>
            <Image src="/loginbg.png" width={400} height={500} alt="bg"></Image>
        </div>
        <div className="text-black flex flex-col gap-5">
            <div>
                <form className="flex flex-col gap-3">
                    <Image src="/hexlogo.png" width={150} height={100} alt="logo" className="ml-auto mr-auto"></Image>
                    <p>username</p>
                    <input type="text" className="bg-gray-300 w-[350px] h-[40px] rounded-2xl"></input>
                    <p>password</p>
                    <input type="password" className="bg-gray-300 w-[350px] h-[40px] rounded-2xl"></input>
                    <button type="submit" className="bg-green-600 text-white p-2 rounded-2xl mt-4">Login</button>
                </form>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex justify-center items-center gap-3">
                        <input type="radio"></input>
                        <p>Remember Me</p>
                    </div>
                    <p className="text-blue-700">Forget Password</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10">
                <button className="bg-gray-200 p-3 rounded-2xl w-[130px] flex justify-center items-center gap-2"><FaGoogle /> <h2>GOOGLE</h2></button>
                <button className="bg-gray-200 p-3 rounded-2xl w-[130px] flex justify-center items-center gap-2"><FaFacebook /> <h2>FACEBOOK</h2></button>
            </div>
            <div className="flex justify-around items-baseline">
                <p>don't have any account</p>
                <Link href="/register"><p className="text-blue-700">sign up</p></Link>
            </div>
        </div>
    </div>
  )
}
