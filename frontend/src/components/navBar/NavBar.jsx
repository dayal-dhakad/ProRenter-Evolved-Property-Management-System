import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const [show, setShow] = useState(false);
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          <Link to="/upload" className="link">
            <span>Upload</span>
          </Link>
        </div>
        <div className="right">
          {user ? (
            <>
              <div className="userImg">
                <img
                  src="https://images.pexels.com/photos/8978566/pexels-photo-8978566.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  onClick={() => setShow(!show)}
                />
              </div>
              <div className="user">
                <p onClick={() => setShow(!show)}>{user.username}</p>

                {show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    onClick={() => setShow(!show)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    onClick={() => setShow(!show)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {show && (
                <div className="dropMenu">
                  <p>Settings</p>
                  <hr />
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/signIn" className="link">
                <span>SIGN IN</span>
              </Link>
              <Link to="/signUp" className="link">
                <span>REGISTER</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
