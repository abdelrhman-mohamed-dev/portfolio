//imports
import { FiChevronDown } from "react-icons/fi";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import { groq } from "next-sanity";
import { Skill, Work } from "@/typings";
import { client } from "@/sanity/lib/client";

const Skillsqurey = groq`
  *[_type=="skill"]
`;
const Worksqurey = groq`
  *[_type=="work"]
`;

export const revalidate = 60;

export default async function Home() {
  const skills: Skill[] = await client.fetch(Skillsqurey);
  const works: Work[] = await client.fetch(Worksqurey);
  return (
    <div className="">
      {/* SECTION 1 - NAVBAR HEADER HERO */}
      <div id="home" className="min-h-screen space-y-8 lg:space-y-16 relative">
        <Navbar />
        <Header />
        <Hero />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer mt-4" />
      </div>

      {/* SECTION 2  - SKILLS */}
      <Skills skills={skills} />
      {/* SECTION 3  - PROJECTS */}
      <Projects works={works} />

      {/* SECTION 4  - ABOUT ME */}
      <About />
    </div>
  );
}
