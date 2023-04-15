import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

function Login() {
  const { dispatch } = useAuthContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://coc-1.adityasurve1.repl.co/user/userlogin", {
        email: email,
        password: password,
      })
      .then((response) => {
        setErrorMessage("");
        dispatch({ type: "LOGIN", payload: response.data });
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        navigate("../events");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage("Incorrect details");
      });
  }
  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <div className="login-form-container">
          <form className="login-form">
            <h1>Sign in to a better travelling experience.</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: "red" }}>
              {errorMessage === "ok"
                ? "Signup Successfull, Please login"
                : errorMessage}
            </p>
            <div>
              <Link>Forget Password?</Link>
            </div>
            <button type="button" onClick={handleSubmit}>
              Sign in
            </button>
            <div className="login-subtitle">
              <p>New Here?</p>
              <Link to="/aboutyou">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
