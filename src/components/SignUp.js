import "../styles/SignUp.css";
import React from "react";
import { NavLink } from "react-router-dom";
import InputWithError from "./InputError";


let Users;
if (localStorage.Users != null) {
  Users = JSON.parse(localStorage.Users);
} else {
  Users = [];
}
export default function SignUp() {

  const clickNav = React.createRef();

  const firstNameInput = React.createRef();
  const lastNameInput = React.createRef();
  const addressInput = React.createRef();
  const emailInput = React.createRef();
  const citySelect = React.createRef();
  const passwordInput = React.createRef();
  const passwordConfirmInput = React.createRef();
const checkPasswordStrength = (password) => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const isLengthValid = password.length >= 10;

  if (hasLetter && hasDigit && hasSpecialChar && isLengthValid) {
    return true;
  } else {
    return false;
  }
};


  const clearInput = () => {
    firstNameInput.current.value = "";
    lastNameInput.current.value = "";
    addressInput.current.value = "";
    emailInput.current.value = "";
    passwordInput.current.value = "";
    passwordConfirmInput.current.value = "";
    citySelect.current.value = "";
  };
  const createAccount = (e) => {
    e.preventDefault();
    if (
      firstNameInput.current.value !== "" &&
      lastNameInput.current.value !== "" &&
      addressInput.current.value !== "" &&
      emailInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      passwordConfirmInput.current.value !== "" &&
      citySelect.current.value !== ""
    ) {
      const password = passwordInput.current.value;
      const confirmPassword = passwordConfirmInput.current.value;
      const email = emailInput.current.value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      const isStrongPassword = checkPasswordStrength(password);;

      if (isValidEmail) {
        if (isStrongPassword) {
          if (password === confirmPassword) {
            Users.push({
              firstName: firstNameInput.current.value,
              lastName: lastNameInput.current.value,
              address: addressInput.current.value,
              email: emailInput.current.value,
              password: passwordInput.current.value,
              city: citySelect.current.value,
              mood: "SignUp",
            });
            clearInput();
            localStorage.setItem("Users", JSON.stringify(Users));
            alert("Welcome to our store");
            clickNav.current.click();
            // props.handleCompte();
          } else {
            alert("the passwords you entered do not match");
          }
        } else{
          alert('Your password not strong enough')
        }
      } else {
        alert("Invalid email format!");
      }
    } else {
      alert("Required fields are empty!");
    }
  };

  return (
    <div className="container1">
      <header>Signup</header>
      <form onSubmit={createAccount}>
        <div className="field email-field">
          <div className="name">
            <InputWithError
              placeholder={"Enter your first name"}
              refName={firstNameInput}
              idInput="input1"
            />
            <InputWithError
              placeholder={"Enter your last name"}
              refName={lastNameInput}
              idInput="input2"
            />
            <InputWithError
              placeholder={""}
              refName={citySelect}
              idInput="adressCity"
            />
            <InputWithError
              placeholder={"Enter your home address"}
              refName={addressInput}
              idInput="adress"
            />
          </div>
          <InputWithError
            placeholder={"Enter your email"}
            refName={emailInput}
            idInput="email"
          />
        </div>
        <div className="name1">
          <InputWithError
            placeholder={"Create password"}
            refName={passwordInput}
            idInput="inputPassword1"
          />
          <InputWithError
            placeholder={"Confirm password"}
            refName={passwordConfirmInput}
            idInput="inputPassword2"
          />
        </div>
        <div className="input-field button">
          <NavLink to={"/SignIn"} style={{ display: "none" }} ref={clickNav}>
            Navigate
          </NavLink>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
