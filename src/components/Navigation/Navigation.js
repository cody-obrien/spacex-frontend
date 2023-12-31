import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__item">
          <NavLink
            to="/"
            exact
            className="nav__link"
            activeClassName="nav__link-active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            activeClassName="nav__link-active"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
