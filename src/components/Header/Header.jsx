import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={`header ${s.header}`}>
      <div className={`container ${s.container}`}>
        <NavLink to="/">
          <img src={logo} alt={logo} className={s.logo} />
        </NavLink>
        <div className={s.links}>
          <NavLink to="/">
            <i className={`fa-solid fa-house ${s.home_logo} ${s.logo}`}></i>
          </NavLink>
          <NavLink to="/about">
            <i className={`fa-solid fa-person ${s.about_logo} ${s.logo}`}></i>
          </NavLink>
          <NavLink to="https://github.com/" target="_blank">
            <i className={`fa-brands fa-github ${s.github_logo} ${s.logo}`}></i>
          </NavLink>
          <NavLink to="https://telegram.me/re1vl" target="_blank">
            <i className={`fa-brands fa-telegram ${s.tg_logo} ${s.logo}`}></i>
          </NavLink>
        </div>
        <NavLink to="/">
          <i className={`fa-solid fa-circle-user ${s.user_logo} ${s.logo}`}></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
