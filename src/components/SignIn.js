import { NavLink } from "react-router-dom";
import "../styles/SignIn.css";
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import UserProfile from "./UserProfile";
import { loginSuccess} from "../Slices/LoginSlice";



export default function SignIn() {
  let Users;
  if (localStorage.Users != null) {
    Users = JSON.parse(localStorage.Users);
  } else {
    Users = [];
  }
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();
  const inputEmail = React.createRef();
  const inputPassword = React.createRef();

  const handleLoginUser = (arr) => {
    dispatch(loginSuccess(arr));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const passwordValue = inputPassword.current.value;
    let found = false;
    if (emailValue !== "" && passwordValue !== "") {
      for (let i = 0; i < Users.length; i++) {
        if (
          Users[i].email === emailValue &&
          Users[i].password === passwordValue
        ) {
          Users[i].mood = "SignIn";
          localStorage.setItem("Users", JSON.stringify(Users));

          found = true;
          handleLoginUser(JSON.parse(localStorage.Users));
          break;
        }
      }
    } else {
      alert("Required fields are empty!");
      found = true;
    }

    if (!found) {
      alert("Your email or your password is not correct");
    }
  };

  if (!loggedIn) {
    return (
      <div className="wrapper">
        <h1>Hello Again!</h1>
        <p>
          Welcome back you've <br /> been missed!
        </p>
        <form onSubmit={handleSumbit}>
          <input
            className="inputSignIn"
            type="text"
            placeholder="Enter your email"
            id="loginEmail"
            ref={inputEmail}
          />
          <input
            className="inputSignIn"
            type="password"
            placeholder="Password"
            id="loginPassword"
            ref={inputPassword}
          />
          <p className="recover">Recover Password</p>

          <button type="Sumbit">Sign in</button>
        </form>
        <p className="or">----- or continue with -----</p>
        <div className="icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="not-member">
          Not a member?
          <span className="signUp">
            <NavLink to={"/SignUp"} style={{ color: "#ff7200" }}>
              Register Now
            </NavLink>
          </span>
        </div>
      </div>
    );
  } else {
    return <UserProfile />;
  }
}
