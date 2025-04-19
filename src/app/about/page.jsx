import MySkills from "@/components/MySkills";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col justify center">
      <div>
        <h1>About</h1>
        <div className='flex flex-row'>
            <Image
                src="https://example.com/cpp.png"
                alt="My Image"
                width={500}
                height={500}
                className="rounded-full"
            />
            <div></div>
        </div>
      </div>
      <div>
        <MySkills />
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
