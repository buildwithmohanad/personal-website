import React, { useState } from "react";
import Projects_Data from "../assets/Projects_Data.json";
function ProjectsSection() {
  const [style, setStyle] = useState({ bottom: "-14rem" });

  let id = 100;

  return (
    <section className="projects">
      <h3>Projects</h3>
      <div>
        {Projects_Data.map((project) => {
          return (
            <div
              key={id++}
              // style={{
              //   backgroundImage: `url(assets/Projects/${project.Image})`
              // }}
              onMouseEnter={(e) => {
                setStyle({ bottom: "0rem" });
              }}
              onMouseLeave={(e) => {
                console.log(this)
                setStyle({ bottom: "-17rem" });
              }}
              className="project"
            >
              <img
                src={
                  process.env.PUBLIC_URL + `assets/Projects/${project.Image}`
                }
                alt="project"
              />
              <div className="projectDetails" style={style}>
                <h4>{project.Title}</h4>
                <ul>
                  <a href={project.Website}>Website</a>
                  <a href={project.Rebo}>Github</a>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
