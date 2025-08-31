import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-[80px] pb-[100px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 overflow-y-hidden"
      >
        <source src="/pixelbg2.mp4" />
      </video>
      <div className="flex flex-col items-start gap-[30px]">
        <div className="flex gap-[120px] items-center">
          <div
            data-aos="fade-up"
            className="text-black w-[700px] flex flex-col gap-[30px] px-10 py-10 rounded-xl bg-white/10 backdrop-blur-sm "
          >
            <h2 className="text-3xl font-[700] text-black ">
              HEX , a tool that makes math easier
            </h2>
            <h1 className="text-6xl font-[700]">
              Fun-Filled Math with Visuals & Challenges!
            </h1>
            <h3 className="text-2xl font-[700] text-black">
              Hex is more than just a platform for teaching math; it is a
              platform that teaches math more visually, connects teachers and
              students, and provides new ways to explore and learn math, as well
              as develop math problem-solving skills for students.
            </h3>
          </div>
          <div
            data-aos="fade-up"
            className="border-2 border-black w-[400px] h-[300px] rounded-2xl"
          ></div>
        </div>
        <Link
          href="/started"
          data-aos="fade-up"
          className="bg-[#00BF63] p-[15px] flex items-center justify-center w-[150px] text-2xl font-black rounded-[15px]"
        >
          Start
        </Link>
      </div>
    </div>
  );
}
