import React from "react";
import { NavLink } from "react-router-dom";
import s from "./List.module.css";

const List = (props) => {
  return (
    <li>
      <NavLink to={props.item.link}>
        <span className={s.link_name}>{props.item.name}</span>
      </NavLink>
    </li>
  );
};

export default List;
