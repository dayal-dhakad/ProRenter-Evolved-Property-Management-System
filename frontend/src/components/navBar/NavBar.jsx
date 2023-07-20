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
          <span>Services</span>
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
