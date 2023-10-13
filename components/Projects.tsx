import { urlForImage } from "@/sanity/lib/image";
import { Work } from "@/typings";
import Image from "next/image";
import React from "react";

const Projects = ({ works }: { works: Work[] }) => {
  return (
    <div id="work" className="mt-20 lg:mt-56 space-y-8 lg:space-y-10 relative">
      <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap">
        <span className="text-gray-500">Selected</span>
        <span className="font-medium">Works</span>
      </div>

      <div className="space-y-20 lg:space-y-32 w-5/6 mx-auto">
        {works.map((work, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-5/6 `}
          >
            <div className="col-span-1 w-full">
              <Image
                src={urlForImage(work.image).url()}
                className="rounded-3xl shadow-lg cursor-pointer"
                alt="work"
                width={1200}
                height={1200}
              />
            </div>
            <div className="col-span-1 w-full h-full flex flex-col justify-end space-y-8">
              <h1 className="uppercase font-medium">{work.title}</h1>
              <p className="text-3xl font-light leading-relaxed">
                <span className="text-gray-500">{work.lightDescription}</span>
                <span className="font-semibold">{work.boldDescription}</span>
              </p>
              <h6 className="font-light text-gray-400">{work.tags}</h6>
              <a
                href={work.github}
                className=" block justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black"
              >
                View on Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
