import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={`header` + " " + s.header}>
      <div className={`container` + " " + s.container}>
        <img src={logo} alt={logo} className={s.logo} />
        <div className={s.links}>
          <NavLink to="/">
            <i class="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to="/about">
            <i class="fa-solid fa-person"></i>
          </NavLink>
          <NavLink to="https://github.com/" target="_blank">
            <i class="fa-brands fa-github"></i>
          </NavLink>
          <NavLink to="https://telegram.me/re1vl" target="_blank">
            <i class="fa-brands fa-telegram"></i>
          </NavLink>
        </div>
        <NavLink to="/">
          <i class="fa-solid fa-circle-user"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
