import AboutMePage from "@/components/AboutPage";
import MyProject from "@/components/MyProjects";
import MySkills from "@/components/MySkills";
import Image from "next/image";

function About() {
  return (
    <div className="pt-30 lex flex-col justify center bg-gradient-to-r from-black to-purple-900">
      <AboutMePage />
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


