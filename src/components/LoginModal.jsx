import React from "react";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const LoginModal = ({ handleSignUp, handleSignUpExit, dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/accounts/login/", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    })
      .then((a) => a.json())
      .then((a) => {
        localStorage.setItem("accessToken", a.token.access);
        localStorage.setItem("refreshToken", a.token.refresh);
        dispatch({
          type: "SET_USER",
          payload: a,
        });
      });
 
 
  };
  return (
    <div className="login-wrapper">
      <div className="login-input">
        <form method="post" onSubmit={handleSubmit}>
          <div className="login-input-head">
            <div className="org">Organick</div>
            <div className="login-input-head-title">
              <p>Welcome Back</p>
              <p className="p login_p">
                Login in with your email address and password
              </p>
            </div>
          </div>

          <div className="login-input-title">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                type="email"
                required
                placeholder="Enter your email..."
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div>
              <div className="login-remember">
                <input type="checkbox" name="Remember me" id="" />
                <label htmlFor="">Remember me</label>
              </div>
            </div>

            <div className="login-button">
 
              <button type="submit" >Sign In</button>
           

            </div>
          </div>
        </form>
        <div className="sign-up" onClick={handleSignUp}>
          <p>Don't have an account?</p>
          <p className="blue-sign">Sign Up</p>
        </div>
        
      </div>
      <div className="login-img">
        <img src={"/static/login.jpg"} alt="" />
        <div onClick={handleSignUpExit}>
          <CiCircleRemove />
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default connect()(LoginModal);
