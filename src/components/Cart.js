import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Cart.css";
export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const IsUserLoggedIn = useSelector((state) => state.login.loggedIn);


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("AddedProducts")) || [];
    setCartProducts(storedProducts);
    
  }, []);

  const removeItem = (id) => {
    const updatedProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedProducts);
    localStorage.setItem("AddedProducts", JSON.stringify(updatedProducts));
  };


  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, item) => {
      return total + item.Quantity * item.price;
    }, 0);
  };
  const total = calculateTotalPrice() - (calculateTotalPrice() * 20) / 100;
  localStorage.setItem('total',JSON.parse(total))

const addQuantity = (id) => {
  const updatedProducts = cartProducts.map((product) => {
    if (product.id === id) {
      return { ...product, Quantity: product.Quantity + 1 };
    }
    return product;
  });
  setCartProducts(updatedProducts);
  localStorage.setItem("AddedProducts", JSON.stringify(updatedProducts));
}

const reduceQuantity = (id) => {
  const updatedProducts = cartProducts.map((product) => {
    if (product.id === id && product.Quantity > 1) {
      return { ...product, Quantity: product.Quantity - 1 };
    }
    return product;
  });
  setCartProducts(updatedProducts);
  localStorage.setItem("AddedProducts", JSON.stringify(updatedProducts));
};

  if (IsUserLoggedIn) {
    if (cartProducts.length === 0) {
      return (
        <h1 style={{ textAlign: "center", marginTop: 230, color: "orange" }}>
          Add product now
        </h1>
      );
    } else {
      return (
        <div className="container">
          <h1 id="h1">Shopping Cart</h1>
          <div className="cart" id="cart1">
            {cartProducts.map((item) => {
              return (
                <div className="products" key={item.id}>
                  <div className="product" id="pro">
                    <img src={item.cover} alt="" />
                    <div className="product-info">
                      <h3 className="product-name">Adidas</h3>
                      <h4 className="product-price">
                        The price: {item.price} $$
                      </h4>
                      <h4 className="product-offer">Offer: 20%</h4>
                      <h4>
                        Quantity : {item.Quantity}{" "}
                        <span
                          onClick={() => {
                            addQuantity(item.id);
                          }}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </span>
                        {"  "}
                        <span
                          onClick={() => {
                            reduceQuantity(item.id);
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </span>
                      </h4>
                      <p className="product-remove">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span
                          className="remove"
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          Remove
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total" id="cart-total">
            <div className="cart-total" id="cart-total">
              <p>
                <span> Price : </span>

                <span id="Price">{calculateTotalPrice()}</span>
              </p>
              <p>
                <span>You Save : </span>

                <span id="totalSave">
                  ${(calculateTotalPrice() * 20) / 100}
                </span>
              </p>
              <p>
                <span>Total Price : </span>

                <span id="totalPrice">
                  ${calculateTotalPrice() - (calculateTotalPrice() * 20) / 100}
                </span>
              </p>
              <NavLink to="/BuyProduct" id="buy">
                By now
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <h1 style={{ textAlign: "center", marginTop: 230, color: "red" }}>
        You have to sign in first to add product
      </h1>
    );
  }
}
