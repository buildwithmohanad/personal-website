import React, { Suspense, lazy } from "react";
import logo from "./assets/logo.webp";
import heroIMG from "./assets/hero_image.svg";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import gmailLogo from "./assets/gmail.svg";

function App() {
  const SkillsSection = lazy(() => import("./sections/skillsSection.jsx"));
  const ProjectsSection = lazy(() => import("./sections/projectsSection.jsx"));
  const ContactSection = lazy(() => import("./sections/ContactSection.jsx"));

  return (
    <div className="App bg-background text-text font-Roboto">
      <header>
        <nav>
          <img src={logo} alt="logo" />
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
            <h1>Hi, I'm Mohannad</h1>
            <p>
              you must have a swift website to grow your business
              <b>
                <i> Faster</i>
              </b>
            </p>
          </div>
          <img src={heroIMG} alt="hero" />
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
              <a href="https://www.linkedin.com/in/mohanad-aldardiry-175614239/">
                <img src={linkedinLogo} alt="Linkedin Logo " />
              </a>
            </li>
            <li>
              <a href="mailto:mohanad.ALdardiry@gmail.com">
                <img src={gmailLogo} alt="Gmail Logo " />
              </a>
            </li>
            <li>
              <a href="https://github.com/Mohannad-AlDardiri">
                <img src={githubLogo} alt="github Logo " />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
