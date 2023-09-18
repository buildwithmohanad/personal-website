import React from "react";
import Skills_Data from "../assets/Skills_Data.json";
import Image from "next/image";

const skillSection = () => {
  let id = 1;
  return (
    <section className="skills">
      <h3>Skills</h3>
      <div>
        {Skills_Data.map((skill) => {
          return (
            <div className="skill" key={id++}>
              <Image
                className="h-20 mb-2 xl:h-24 2xl:h-28 max-w-max"
                src={require(`../assets/Logos/${skill}_Logo.svg`)}
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
