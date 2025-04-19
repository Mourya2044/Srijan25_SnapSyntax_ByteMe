import MyProject from "@/components/MyProjects";
import MySkills from "@/components/MySkills";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col justify center">
      <>
        <h1>About</h1>
        <div className='flex flex-row'>
            <Image
                src="https://placehold.co/600x400.png"
                alt="My Image"
                width={500}
                height={500}
                className="rounded-full"
            />
            <div></div>
        </div>
      </>
      <div>
        <MySkills />
      </div>
      <div>
        <MyProject />
      </div>
    </div>
  );
}
export default About;
