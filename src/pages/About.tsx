import useRandomizer from "../hooks/useRandomizer";
import useListAnimation from "../hooks/useListAnimation";

const About: React.FC = () => {
  const { getColor, getRandomTilt } = useRandomizer();
  const frontEndTech: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React.js",
  ];

  const backEndTech: string[] = [
    "Node.js",
    "Ruby on Rails",
    "MongoDB",
    "PostgreSQL",
  ];
  const otherTech: string[] = ["GitHub", "Vite", "Adobe Tools"];

  useListAnimation()

  function renderList(list: string[]) {
    return list.map((item) => {
      return (
        <li
          className="anim-list-item"
          key={item}
          style={{
            transform: getRandomTilt(),
            display: "inline-block",
            backgroundColor: getColor(),
          }}
        >
          {item}
        </li>
      );
    });
  }

  return (
    <div className="about-page">
      <h2>About</h2>
      <p>
        Hi, I'm Jaymar. I'm a self-taught, self-driven, full stack web
        developer. I have been doing web development for over a year now, and I
        am eager to contribute my skills to help industries build products that
        can provide people with meaningful experiences.
      </p>
      <h2>Skills</h2>
      <div className="skills-list">
        <h3>Front End</h3>
        <ul>{renderList(frontEndTech)}</ul>
      </div>
      <div className="skills-list">
        <h3>Back End</h3>
        <ul>{renderList(backEndTech)}</ul>
      </div>
      <div className="skills-list">
        <h3>Others</h3>
        <ul>{renderList(otherTech)}</ul>
      </div>
    </div>
  );
};

export default About;
