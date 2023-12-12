
import "../styles/UserProfile.css";

import { useSelector ,useDispatch } from "react-redux";
import { logout } from "../Slices/LoginSlice";
import { NavLink } from "react-router-dom";

export default function UserProfile() {

  const dispatch = useDispatch()

  let Users;
  if (localStorage.Users != null) {
    Users = JSON.parse(localStorage.Users);
  } else {
    Users = [];
  }
  const loggedInUser = useSelector((state) => state.login.CurrentUser);
  const handleSignOut = () => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].mood === "SignIn") {
        Users[i].mood = "SignUp";
        localStorage.setItem("Users", JSON.stringify(Users));
        dispatch(logout());
 
        break
      }
    }
  };

    return (
      <div className="container" id="profile">
        <h1>Customer Information</h1>
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <h2>
              First name : <span id="value">{loggedInUser.firstName}</span>
            </h2>
            <h2>
              Last name : <span id="value">{loggedInUser.lastName}</span>
            </h2>
            <h2>
              City : <span id="value">{loggedInUser.city}</span>
            </h2>
            <h2>
              Adress : <span id="value">{loggedInUser.address}</span>
            </h2>
            <h2>
              Email : <span id="value">{loggedInUser.email}</span>
            </h2>
            <div className="buttons">
              <NavLink to={"/SignIn"}>
                <button onClick={handleSignOut}>Sign out</button>
              </NavLink>
              <NavLink to={"/UpdateAccountInfo"}>
                <button>Update</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );

}
