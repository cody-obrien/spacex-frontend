import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />
      <p className="header__title">Here's a header</p>
      <Navigation />
    </div>
  );
}
