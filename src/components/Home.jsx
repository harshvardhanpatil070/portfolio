import React from "react";

import HeroSection from "./Hero";
import Skill from "./Skill";
import ProjectsCarousel from "./ProjectsCarousel";
import Timeline from "./Timeline";
import Contact from "./Contact";


function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <HeroSection />
      <main className="flex-grow">
      <Skill/>
      <ProjectsCarousel/>
      <Timeline/>
            <Contact/>
        
      </main>

    </div>
  );
}

export default Home;
