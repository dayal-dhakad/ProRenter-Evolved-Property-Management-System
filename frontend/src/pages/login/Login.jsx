import React from "react";
import NavBar from "../../components/navBar/NavBar";
import { Link } from "react-router-dom";

function Login() {
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
            <h1>Sign In Here.</h1>
            <form action="">
              <div className="formLabel">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="name" />
              </div>
              <div className="formLabel">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" />
              </div>
              <button>SING IN</button>
              <p>
                You don't have an account?{" "}
                <Link to="/signUp">sing up here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
