import "../styles/Contact.css"

export default function Contact() {
  return (
    <div>
      <div className="container">
        <h2 id="h2">CONTACT</h2>
      </div>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <h3>CONTACT</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolorem sit excepturi, nemo reiciendis animi?
            </p>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="text" placeholder="Message" />
            <br />

            <button id="btnmessage">Send</button>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <h3>INFO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              odio assumenda nostrum commodi at corporis!
            </p>
            <i className="fas fa-phone">
              {"   "}
              <span>+000000000000000</span>
            </i>
            <br />
            <i className="fa-solid fa-envelope">
              {"   "}
              <span>example@gmail.com</span>
            </i>
            <br />
            <i className="fa-solid fa-envelope">
              {"   "}
              <span>Message</span>
            </i>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
