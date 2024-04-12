import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  function closeNavAndScrollTop() {
    const navToggle: HTMLElement | null = document.getElementById("nav-toggle");
    if (navToggle instanceof HTMLInputElement) {
      navToggle.checked = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <nav className="nav-bar">
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
        <li onClick={closeNavAndScrollTop}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={closeNavAndScrollTop}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={closeNavAndScrollTop}>
          <Link to="/reach-out">Reach Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
