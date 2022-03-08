import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">
            <h3>
              {" "}
              Find
              <span style={{ fontFamily: "Courier New", color: "green" }}>
                Prop
              </span>
            </h3>
            <h4>Change starts here. Home for all Properties </h4>
          </div>
          <div className="col">
            <h3>
              Office{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Federal Secretariat</p>
            <p>Calabar, Cross River, Nigeria</p>
            <p className="email-id">hr@findprop.com</p>
            <h4>+2347030920560</h4>
          </div>
          <div className="col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/properties">
                <li>Properties</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/find-agent">
                <li>Find Agent</li>
              </Link>
              <Link to="/register">
                <li>Register</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form>
              <i>
                <FaEnvelope />
              </i>
              <input
                type="email"
                placeholder="Enter email address"
                required
              ></input>
              <button type="submit">
                <span>
                  <FaArrowAltCircleRight
                    style={{ color: "black", fontSize: "15px" }}
                  />
                </span>
              </button>
            </form>
            <div className="social-icons">
              <i>
                <FaFacebook />
              </i>
              <i>
                <FaTwitter />
              </i>
              <i>
                <FaInstagram />
              </i>
              <i>
                <FaWhatsapp />
              </i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">FindProp &copy; 2022 - All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
