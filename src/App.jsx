import React, { Suspense, lazy } from "react";
import logo from "./assets/logo.png";
import heroIMG from "./assets/hero_image.svg";
function App() {
  const SkillsSection = lazy(() => import("./sections/skillsSection.jsx"));
  const ProjectsSection = lazy(() => import("./sections/projectsSection.jsx"));
  return (
    <div className="App bg-background text-text font-Roboto">
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <a href="#experience" rel="canonical">
              experience
            </a>
            <a href="#contact" rel="canonical">
              contact
            </a>
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
            third-year computer science student, aspiring front-end web
            developer I started learning web-building science when I was 13
            years old. I have built lots of pages and road books, so I have a
            bit of experience in building fully accessible and swift websites.
          </p>
        </section>
        <section id="experience">
          <Suspense fallback={<div className="Loading">loading...</div>}>
            <SkillsSection />
            <ProjectsSection />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default App;
