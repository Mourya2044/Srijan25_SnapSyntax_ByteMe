
import React from 'react';

const projects = [
    {
        name: "Project 1",
        description: "Description of Project 1",
        image1: "/images/project1-1.jpg"
    },
    {
        name: "Project 2",
        description: "Description of Project 2",
        image1: "/images/project2-1.jpg"
    },
    {
        name: "Project 3",
        description: "Description of Project 3",
        image1: "/images/project3-1.jpg"
    },
]

const skills = [
    {
        name: "CSS...."
    },
    {
        name: "Figma...."
    },
    {
        name: "React...."
    },
    {
        name:"Tailwindcss"
    }
]



function About() {
  return (
    <div className="flex flex-col justify center">
      <div>
        <h1>About</h1>
        <div className='flex flex-row'>
            <Image></Image>
            <div></div>
        </div>
      </div>
      <div>
        <h2>My Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <img src={project.image1} alt={`${project.name} image 1`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default About;
