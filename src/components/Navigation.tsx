import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/"><h1>Jaymar Jumadiao</h1></Link>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reach-out">Reach Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
