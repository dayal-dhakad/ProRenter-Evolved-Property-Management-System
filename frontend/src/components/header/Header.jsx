import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="left">
          <h2>
            Welcome to Our House Rental System, Your Gateway to Comfortable
            Living! Discover a seamless and stress-free way to find your dream
            home.
          </h2>
          <Link to="/services" className="link">
            <span>Get Started Now! Book and Reserve Your House or Room</span>
          </Link>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/11264535/pexels-photo-11264535.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
