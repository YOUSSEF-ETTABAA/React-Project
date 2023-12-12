import { NavLink} from "react-router-dom";
import '../styles/Navbar.css';


export default function Navbar() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">
            Etta<span className="aa">baa</span>
          </h2>
        </div>

        <div className="menu">
          <ul>
            <li>
              <NavLink to="/Home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/About">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/Shop">SHOP</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/SignIn">LOGIN</NavLink>
            </li>
          </ul>
        </div>

        <div className="icons1">
          <NavLink to="/SignIn">
            <i className="fa-regular fa-user"></i>
          </NavLink>
          <NavLink to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>

         
        </div>
      </div>
    </div>
  );
}
