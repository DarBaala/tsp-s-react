import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <Link to={"/"}>
          <img src={logo} alt="Logo: Rim group" className="nav__logo" />
        </Link>
        <ul className="nav__companies">
          <li>ТЕПЛОСТРОЙПРОЕКТ-С</li>
          <li>RIMBUILDING</li>
          <li>RIMPORTAL</li>
        </ul>
        <div className="nav__back-call">
          {/* <a href="tel:+7(800)3339383">8 (800) 333 93 83</a> */}
          <button>Обратный звонок</button>
        </div>
        <div className="nav__auth">
          <a href="/">Вход</a>
          <a href="/">Регистрация</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
