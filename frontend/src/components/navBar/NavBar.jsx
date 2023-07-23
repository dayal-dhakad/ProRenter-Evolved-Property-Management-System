import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarComponent">
        <div className="left">
          <h1>RentalSystem</h1>
        </div>
        <div className="middle">
          <span>Home</span>
          <span>About Us</span>
          <Link to="/services" className="link">
            <span>Services</span>
          </Link>
          <span>Contact Us</span>
        </div>
        <div className="right">
          <span>SIGN IN</span>
          <span>JOIN</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
