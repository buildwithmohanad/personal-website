import React, { Suspense, lazy } from "react";
import logo from "../assets/logo.webp";
import Image from "next/image";
import heroIMG from "../assets/hero_image.svg";
import githubLogo from "../assets/github.svg";
import gmailLogo from "../assets/gmail.svg";

function App() {
  const SkillsSection = lazy(() => import("../sections/skillsSection.jsx"));
  const ProjectsSection = lazy(() => import("../sections/projectsSection.jsx"));
  const ContactSection = lazy(() => import("../sections/ContactSection.jsx"));

  return (
    <div className="App bg-background text-text font-Roboto">
      <header>
        <nav>
          <Image src={logo} alt="logo" />
          <ul>
            <li>
              <a href="#experience" rel="canonical">
                experience
              </a>
            </li>
            <li>
              <a href="#contact" rel="canonical">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="landing">
          <div>
            <h1>Hi, I&apos;m Ahmed</h1>
            <p>
              you must have a swift website to grow your business
              <b>
                <i> Faster</i>
              </b>
            </p>
          </div>
          <Image src={heroIMG} alt="hero" />
        </section>
        <section className="about">
          <h2>About me</h2>
          <p>
            I am a skilled third-year computer science student with a passion
            for front-end web development. I started my journey in web-building
            science at the young age of 13 and since then, I have honed my
            skills to become an expert in building fully accessible and fast
            websites. Through my vast experience and numerous successful
            projects, I am confident in my abilities to deliver high-quality
            results and exceed expectations.
          </p>
        </section>
        <Suspense fallback={<div className="Loading">loading...</div>}>
          <section id="experience">
            <ProjectsSection />
            <SkillsSection />
          </section>
          <ContactSection />
        </Suspense>
        <footer>
          <p>Handcrafted by me ©️ 2022</p>
          <ul>
       
            <li>
              <a href="mailto:ahmed.eldardeery.eng@gmail.com">
                <Image src={gmailLogo} alt="Gmail Logo " className="w-auto h-10 md:h-12 xl:h-14 2xl:h-[4.5rem]"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/ahmed-eldardeery">
                <Image src={githubLogo} alt="github Logo "className="w-auto h-10 md:h-12 xl:h-14 2xl:h-[4.5rem]" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
