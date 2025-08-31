"use client";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function page() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex justify-center items-center text-black w-[70vw] h-[70vh]">
        <Tldraw />
      </div>
    </div>
  );
}
