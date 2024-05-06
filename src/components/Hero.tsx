import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero-page fade-in">
      <h2
        style={{
          color: "var(--background)",
          padding: "0",
          fontSize: "5vmax",
          textAlign: "start",
        }}
      >
        <br />
        Full Stack <br />
        Web <br />
        Developer
      </h2>
      <br />
      <p style={{ color: "var(--background)", fontSize: "2vmax" }}>
        Hi, let me help you with your project.
      </p>
      <br />
      <Link to="/about">
        <span>→</span>
        &nbsp;
        <button>About me </button>
      </Link>
    </div>
  );
};

export default Hero;
