import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import Cart from "./Cart"
import BuyProduct from "./BuyProduct";
import UpdateAccountInfo from "./UpdateAccountInfo";
import Success from "./Success";
import UpdateAddress from "./UpdateAddress";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/BuyProduct" element={<BuyProduct />} />
        <Route path="/UpdateAccountInfo" element={<UpdateAccountInfo />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/UpdateAddress" element={<UpdateAddress />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UpdateAccountInfo" element={<UpdateAccountInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
