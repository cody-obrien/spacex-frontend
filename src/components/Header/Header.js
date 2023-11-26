import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="reactLogo" />
      <h1 className="header__title">SpaceX API Exploration</h1>
      <Navigation />
    </div>
  );
}
