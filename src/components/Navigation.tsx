import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <h1 className="nav-header">Jaymar Jumadiao</h1>
      </Link>
      <input type="checkbox" id="nav-toggle" />
      <div className="burger-wrapper">
        <label htmlFor="nav-toggle">
          <div className="burger">
            <i>Menu</i>
          </div>
        </label>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/reach-out">Reach Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
