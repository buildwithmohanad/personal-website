import React from "react";
import Projects_Data from "../assets/Projects_Data.json";
function ProjectsSection() {
  let id = 100;

  return (
    <section className="projects">
      <h3>Projects</h3>
      <div>
        {Projects_Data.map((project) => {
          return (
            <div
              key={id++}
              onMouseEnter={(e) => {
                e.target.parentNode.querySelector(
                  ".projectDetails"
                ).style.bottom = 0;
              }}
              onMouseLeave={(e) => {
                e.target.parentNode.querySelector(
                  ".projectDetails"
                ).style.bottom = "-19rem";
              }}
              className="project"
            >
              <img
                src={require(`../assets/Projects/${project.Image}`)}
                alt="project"
              />
              <div className="projectDetails">
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
