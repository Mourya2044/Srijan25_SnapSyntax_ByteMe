import MySkills from "@/components/MySkills";

function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
        <p>This is the about page of our application.</p>
      </div>
      <div>
        <MySkills />
      </div>
      <div>
        <h2>My Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
    </div>
  );
}
export default About;
