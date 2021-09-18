import React from "react";
import "./Nav.scss";
import Logo from "../../images/logoVerde.png";
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo do site" />
          </Link>
        </div>
        <div className="options">
          <Link className="option" to="/Premium">
            <span>Premium</span>
          </Link>
          <Link className="option" to="/FAQ">
            <span>Support</span>
          </Link>
          <Link className="option" to="/Download">
            <span>Download</span>
          </Link>
          <div className="account">
            <span>Log in</span>
            <span>Sing-up</span>
          </div>
        </div>
        <div className="mobileIcon">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default nav;
