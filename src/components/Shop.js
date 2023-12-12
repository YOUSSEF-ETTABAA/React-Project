import "../styles/Shop.css";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";
import { Products } from "../datas/productsList";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Offers = [
  { picture: offer1, describe: "Clothes 30% off", id: 0 },
  { picture: offer2, describe: "Free Delivery", id: 1 },
  { picture: offer3, describe: "clothes free offers", id: 2 },
  { picture: offer4, describe: "Diffrent type of clothes", id: 3 },
];
export default function Shop() {
  const mood = useSelector((state) => state.login.loggedIn); // mood = true ou mood = false
  let AddedProducts;
  if (localStorage.AddedProducts != null) {
    AddedProducts = JSON.parse(localStorage.AddedProducts);
  } else {
    AddedProducts = [];
  }
  const AddToCart = (id) => {
    if (mood) {

      const ProductToAdd = Products.find((product) => product.id === id);
      const isProductInArray = AddedProducts.find(
        (product) => product.id === ProductToAdd.id
      );
      if (ProductToAdd) {
        if (AddedProducts.length !== 0) {
          if (!isProductInArray) {
            AddedProducts.push({ ...ProductToAdd, Quantity: 1 });
            localStorage.setItem(
              "AddedProducts",
              JSON.stringify(AddedProducts)
            );
          }
        } else {
          AddedProducts.push({ ...ProductToAdd, Quantity: 1 });
          localStorage.setItem("AddedProducts", JSON.stringify(AddedProducts));
        }
        
      }
    } else{
      alert('You have to sign in first to continue')
    }
    
  };

  return (
    <div>
      <div className="container" id="top-icons">
        <h1>OFFERS</h1>
        <div className="row">
          {Offers.map((item) => {
            return (
              <div className="col-md-3 py-3 py-md-0" key={item.id}>
                <i>
                  <img src={item.picture} alt="" />
                </i>
                <h3>{item.describe}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container" id="cards">
        <div className="row">
          {Products.map((item) => {
            if (item.price >= 60) {
              return (
                <div className="col-md-6 py-3 py-md-0" key={item.id}>
                  <div className="card">
                    <img src={item.cover} alt="" />
                    <div className="card-img-overlay">
                      <h3>Adidas</h3>
                      <p>Lorem ipsum dolor sit amet.q</p>
                      <NavLink to={"/Cart"}>
                        <button
                          className="rn"
                          onClick={() => {
                            AddToCart(item.id);
                          }}
                        >
                          Order Now
                        </button>
                      </NavLink>
                    </div>
                    <div className="backYellow">
                      <h5>
                        ${item.price} <span />
                        <i className="fa-solid fa-basket-shopping"></i>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row" style={{ marginTop: 30 }}>
          {Products.map((item) => {
            if (item.price >= 50 && item.price < 60) {
              return (
                <div className="col-md-4 py-3 py-md-0" key={item.id}>
                  <div className="card">
                    <img src={item.cover} alt="" />
                    <div className="card-img-overlay">
                      <h3>Adidas</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <NavLink to={"/Cart"}>
                        <button
                          className="rn"
                          onClick={() => {
                            AddToCart(item.id);
                          }}
                        >
                          Order Now
                        </button>
                      </NavLink>
                    </div>
                    <div className="backYellow">
                      <h5>
                        ${item.price}
                        <span>
                          <i className="fa-solid fa-basket-shopping"></i>
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="container" id="Adidas">
        <h1>Adidas</h1>
        <div className="row" style={{ marginTop: 30 }}>
          {Products.map((item) => {
            if (item.price < 40 && item.price > 30) {
              return (
                <div className="col-md-3 py-3 py-md-0" key={item.id}>
                  <div className="card">
                    <img src={item.cover} alt="" />
                    <div className="card-body">
                      <h3>Adidas</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <h5>
                        ${item.price}
                        <NavLink to={"/Cart"}>
                          <span
                            onClick={() => {
                              AddToCart(item.id);
                            }}
                          >
                            <i className="fa-solid fa-basket-shopping"></i>
                          </span>
                        </NavLink>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="banner">
        <h3>Other Product</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
          voluptatibus?
        </p>
        <button className="btnorder">Order Now</button>
      </div>

      <div className="container" id="topcards">
        <div className="row">
          {Products.map((item) => {
            if (item.price > 40 && item.price < 50) {
              return (
                <div className="col-md-4 py-3 py-md-0" key={item.id}>
                  <div className="card">
                    <img src={item.cover} alt="" />
                    <h5>
                      ${item.price}
                      <NavLink to={"/Cart"}>
                        <span
                          onClick={() => {
                            AddToCart(item.id);
                          }}
                          style={{color: 'black'}}
                        >
                          <i className="fa-solid fa-basket-shopping"></i>
                        </span>
                      </NavLink>
                    </h5>
                  </div>
                </div>
              );
            } else{
              return null
            }
          })}
        </div>
      </div>
      <div className="container" id="Adidas">
        <div className="row" style={{ marginTop: 30 }}>
          {Products.map((item) => {
            if (item.price < 30 && item.price > 20) {
              return (
                <div className="col-md-3 py-3 py-md-0" key={item.id}>
                  <div className="card">
                    <img src={item.cover} alt="" />
                    <div className="card-body">
                      <h3>Adidas</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <h5>
                        ${item.price}
                        <NavLink to={"/Cart"}>
                          <span
                            onClick={() => {
                              AddToCart(item.id);
                            }}
                          >
                            <i className="fa-solid fa-basket-shopping"></i>
                          </span>
                        </NavLink>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
