import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../imgs/HMP-logo.png";

function Login() {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Clicked");
    axios
      .post(`${process.env.REACT_APP_DB_URL}/user/userlogin`, {
        email: email,
        password: password,
      })
      .then((response) => {
        //console.log(response.data);
        setErrorMessage("");
        dispatch({ type: "LOGIN", payload: response.data.user });
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data.user.user);
        navigate("../dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage("Incorrect details");
      });
    await axios.post("https://docwebsite.adityasurve1.repl.co/user/userlogin", {
      email: email,
      password: password,
    });

    // const json = await response.data
    // //console.log(json)
    // if(response.ok){
    //     //set state to logged in
    //     dispatch({type:"LOGIN",payload: json})
    //     navigate('../dashboard')
    // }
    //alert(email + password)
  }
  return (
    <div className="login-wrapper">
      <nav className="navbar">
        <img src={logo} onClick={() => navigate("../")} alt="Logo" />
        <div className="navbar-buttons"></div>
      </nav>
      <div className="content-wrapper">
        <div className="login-form-container">
          <form className="login-form">
            <h1>Login</h1>
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
            <button onClick={(e) => handleSubmit(e)}>Login</button>
            <div className="login-subtitle">
              <p>New Here?</p>
              <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
