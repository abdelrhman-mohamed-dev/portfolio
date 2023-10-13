import React from "react";

const About = () => {
  return (
    <div id="about" className="space-y-12 mt-20 lg:mt-56">
      <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap uppercase">
        <span className="text-gray-500">a bit</span>
        <span className="font-medium">about me</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-20">
        <div className="col-span-1 text-3xl font-light leading-relaxed h-full items-center">
          <span className="text-gray-500">
            I am a Full Stack developer who is passionate about writing{" "}
          </span>
          <span className="font-bold">
            {`code and try to find solutions for daily basis problems using code,
            I also love Traveling and Gaming.`}
          </span>
          <div>
            <a
              href={"/"}
              download
              className=" bg-transparent text-green-400 font-bold text-sm uppercase py-2 px-4 border border-green-400 rounded-full hover:bg-green-500 hover:text-white duration-300 ease-in-out transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="col-span-1 relative h-56 mt-10 lg:h-96 lg:ml-20 lg:-mt-14">
          <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic1.png)] lg:animate-card bg-cover h-full w-44 lg:w-72 lg:-top-10 lg:-left-10 -rotate-3"></div>
          <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic2.png)] lg:animate-card2 bg-cover h-full w-44 lg:w-72 left-24 -top-5 lg:-top-32 lg:left-48"></div>
          <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic3.png)] lg:animate-card3 bg-cover h-full w-44 lg:w-72 left-44 top-6 lg:top-10 lg:left-72 rotate-6"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
