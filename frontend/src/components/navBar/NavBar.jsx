import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarComponent">
        <div className="left">
          <Link to="/" className="link">
            <h1>RentalSystem</h1>
          </Link>
        </div>
        <div className="middle">
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/aboutUs" className="link">
            <span>About Us</span>
          </Link>
          <Link to="/contactUs" className="link">
            <span>Contact Us</span>
          </Link>
          <Link to="/services" className="link">
            <span>Services</span>
          </Link>
        </div>
        <div className="right">
          <Link to="/signIn" className="link">
            <span>SIGN IN</span>
          </Link>
          <Link to="/signUp" className="link">
            <span>JOIN</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
