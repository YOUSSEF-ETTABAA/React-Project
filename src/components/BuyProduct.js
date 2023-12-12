import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/BuyProduct.css";


export default function BuyProduct() {
  const [ShowCartVisa, setShowCartVisa] = useState(false);
  const [ShowPaypal, setShowPaypal] = useState(false);
  const [IsUserPuy, setIsUserPuy] = useState(false);
  const loggedInUser = useSelector((state) => state.login.CurrentUser);

  const handleSumbit1 = () => {
    setIsUserPuy(true);
  };
    const handleSumbit2 = () => {
      setIsUserPuy(true);
    };
  return (
    <div>
      {IsUserPuy ? (
        <div>
          <div className="container" id="Buy1">
            <h2 id="h2">
              Your products will be delivered to this address :{" "}
              {loggedInUser.address}{" "}
            </h2>
            <h2 id="h4">
              Is it your address :
              <NavLink to={"/Success"}>
                <button
                  style={{ width: 50, padding: 9, height: 40, margin: 9 }}
                >
                  Yes
                </button>
              </NavLink>
              <NavLink to={"/UpdateAddress"}>
                <button
                  style={{ width: 50, height: 40, padding: 9, margin: 9 }}
                >
                  No
                </button>
              </NavLink>
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <h2 id="h2">Select your preferred purchase option</h2>
          </div>
          <div className="container" id="Buy">
            <div className="row">
              <div className="col-md-6 py-3 py-md-0">
                <h3
                  onClick={() => {
                    setShowCartVisa(false);
                    setShowPaypal(true);
                  }}
                >
                  Paypal
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas dolorem sit excepturi, nemo reiciendis animi?
                </p>{" "}
                {ShowPaypal ? (
                  <form onSubmit={handleSumbit1}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <br />
                    <input
                      type="text"
                      name="amount"
                      placeholder="Your amount"
                      value={localStorage.total}
                      readOnly
                      required
                    />
                    <br />

                    <input type="submit" value="Pay with PayPal" />
                  </form>
                ) : null}
                <br />
              </div>
              <div className="col-md-6 py-3 py-md-0">
                <h3
                  onClick={() => {
                    setShowCartVisa(true);
                    setShowPaypal(false);
                  }}
                >
                  Cart Visa
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, odio assumenda nostrum commodi at corporis!
                </p>
                {ShowCartVisa ? (
                  <form onSubmit={handleSumbit2}>
                    <input
                      type="text"
                      name="card_number"
                      placeholder="Enter your card number"
                      required
                    />
                    <br />
                    <input type="text" name="cvv" placeholder="CVV" required />
                    <br />

                    <input type="submit" value="Submit Payment" />
                  </form>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
