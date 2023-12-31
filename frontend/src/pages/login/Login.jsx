import React, { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
    }
  };

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
                <input
                  type="text"
                  id="username"
                  placeholder="name"
                  onChange={handleChange}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <button disabled={loading} onClick={handleLogin}>
                SING IN
              </button>
              {error && <span style={{ color: "red" }}>{error}</span>}
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
