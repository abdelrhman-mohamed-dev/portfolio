"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import heartAnimation from "@/animations/heart.json";
import { Skill } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <>
      <div className="space-y-8 lg:space-y-12 relative">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap">
          <span className="text-gray-500">Some of the</span>
          <span className="font-medium">technologies I have used and</span>
          <span className="font-medium">loved</span>
          <Lottie
            animationData={heartAnimation}
            loop={true}
            className="w-12 lg:w-24"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 w-full pt-10">
          {skills.map((skill) => (
            <div key={skill._id} className="col-span-1 w-full h-fit my-auto">
              {/* Access skill.name and skill.icon.asset._ref for alt and src */}
              <Image
                alt={skill.name}
                src={urlForImage(skill?.icon).url()}
                className="cursor-pointer hover:scale-105 transition-all"
                width={250}
                height={250}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
