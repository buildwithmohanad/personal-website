import React from "react";
import Skills_Data from "../assets/Skills_Data.json";
const skillSection = () => {
  let id = 1;
  return (
    <section className="skills">
      <h3>Skills</h3>
      <div>
        {Skills_Data.map((skill) => {
          return (
            <div className="skill" key={id++}>
              <img
                src={process.env.PUBLIC_URL + `assets/Logos/${skill}_Logo.svg`}
                alt={skill}
              />
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default skillSection;
