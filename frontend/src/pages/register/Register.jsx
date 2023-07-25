import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./Register.scss";

function Register() {
  return (
    <>
      <NavBar />
      <div className="register">
        <div className="registerContainer">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
          <div className="right">
            <h1>Sign Up Here.</h1>
            <form action="">
              <div className="formLabel">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="name" />
              </div>
              <div className="formLabel">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="email" />
              </div>
              <div className="formLabel">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" />
              </div>
              <div className="formLabel">
                <label htmlFor="">Phone Number</label>
                <input type="number" placeholder="phone number" />
              </div>
              <button>JOIN</button>
              <p>
                already have an account? <Link to="/signIn">sing in here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
