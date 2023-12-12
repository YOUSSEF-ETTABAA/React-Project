import "../styles/UpdateAccount.css"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../Slices/LoginSlice";
import React from "react";

export default function UpdateAccountInfo() {
  const dispatch = useDispatch();

  const firstNameInput = React.createRef();
  const lastNameInput = React.createRef();
  const addressInput = React.createRef();
  const citySelect = React.createRef();

  const clickNav = React.createRef();

  const handleSumbit = (e) => {
    
    e.preventDefault();
    const newInfo = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      address: addressInput.current.value,
      city: citySelect.current.value,
    };
    
    dispatch(updateUserInfo(newInfo));
    alert("You've been change your information succesfully");
     clickNav.current.click();
  };
  return (
    <div className="container1">
      <header>Update</header>
      <form onSubmit={handleSumbit}>
        <div style={{ marginBottom: 25, marginTop: 25 }}>
          <div className="name1">
            <input
              type="text"
              className="name"
              placeholder="Enter your new first name"
              id="firstName"
              ref={firstNameInput}
            />
            <input
              type="text"
              className="name"
              placeholder="Enter your new last name"
              id="lastName"
              ref={lastNameInput}
            />
            <input
              type="text"
              className="name"
              placeholder="Enter your new home adress"
              id="Address"
              ref={addressInput}
            />
            <div className="input-group">
              <select
                id="city"
                name="city"
                required
                ref={citySelect}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your new City
                </option>
                <option value="Rabat">Rabat</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Fes">Fes</option>
                <option value="Tangier">Tangier</option>
                <option value="Agadir">Agadir</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Meknes">Meknes</option>
                <option value="Oujda">Oujda</option>
                <option value="Kenitra">Kenitra</option>
                <option value="El Jadida">El Jadida</option>
              </select>
            </div>
          </div>
        </div>

        <div className="input-field button">
          <NavLink to={"/SignIn"} style={{ display: "none" }} ref={clickNav}>
            Navigate
          </NavLink>
          <input type="submit" style={{ backgroundColor: "orange" }} />
        </div>
      </form>
    </div>
  );
}
