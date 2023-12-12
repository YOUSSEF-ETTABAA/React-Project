import React from "react";
import "../styles/UpdateAddress.css"
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../Slices/LoginSlice";
import { NavLink } from "react-router-dom";


export default function UpdateAddress (){
    
    const dispatch = useDispatch()
    const AddressInput = React.createRef()
    const clickNav = React.createRef()

    const handleSumbit = (e)=>{
         e.preventDefault();
        dispatch(updateUserInfo({ address : AddressInput.current.value}));
        clickNav.current.click();
    }
    return (
      <div className="container1">
        <header>Update</header>
        <form onSubmit={handleSumbit}>
          <div style={{ marginBottom: 25, marginTop: 25 }}>
            <div className="name1">
              <input
                type="text"
                className="name"
                placeholder="Enter your new Address"
                ref={AddressInput}
              />
            </div>
          </div>
          <div className="input-field button">
            <NavLink to={"/Success"} style={{ display: "none" }} ref={clickNav}>
              Navigate
            </NavLink>
            <input type="submit" style={{ backgroundColor: "orange" }} />
          </div>
        </form>
      </div>
    );
}