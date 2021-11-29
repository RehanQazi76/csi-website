import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../style/contactUs.css";

export const ContactUs = () => {
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
      <div className="contactBody container-fluid">
      <div className="container main-child">
        <div className="typewriterEffect d-flex justify-content-center">
          <Typewriter 
            options={{
              strings: ["Need Help?", "Wanna Talk?", "Contact Us!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control messageInput"
                  id="floatingInput"
                  placeholder="Name"
                  required
                  name="uname"
                  value={name}
                  onChange={handleName}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="email"
                  className="form-control messageInput"
                  id="floatingInput"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  className="form-control messageInput"
                  placeholder="Enter Message Here"
                  id="floatingTextarea"
                  name="description"
                  value={message}
                  onChange={handleMessage}
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
              <button type="button" className="btn btn-outline">
                Send Message
              </button>
            </div>
            <div className="col-md-6 mt-5">
              <div className="text-center" id="links">
                <div className="mb-4">
                  <i
                    className="fas fa-map-marker-alt contactIcons"
                    id="addressIcon"
                  ></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi eget neque tellus.
                  </p>
                </div>
                <div className="mb-4">
                  <i
                    className="fas fa-phone-alt contactIcons"
                    id="phoneIcon"
                  ></i>
                  <p>+91-755-5476-832</p>
                </div>
                <div className="d-flex justify-content-around mt-5 mb-5">
                  <i className="fab fa-facebook socialMediaHandles">
                    <Link to="/"></Link>
                  </i>
                  <i className="fab fa-instagram socialMediaHandles">
                    <Link to="/"></Link>
                  </i>
                  <i className="fab fa-twitter socialMediaHandles">
                    <Link to="/"></Link>
                  </i>
                  <i className="fab fa-github socialMediaHandles">
                    <Link to="/"></Link>
                  </i>
                  <i className="fab fa-linkedin socialMediaHandles">
                    <Link to="/"></Link>
                  </i>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="text-center p-4 copyright">
            © 2021 Copyright:&nbsp;
            <Link class="text-reset fw-bold" to="/">CSI VIT Pune</Link>
        </div>
      </div>
  );
};
