import React from "react";
import { NavLink } from "react-router-dom";
import s from "./List.module.css";

const List = (props) => {
  return (
    <li>
      <NavLink to={props.item.link}>
        <div className={s.link_name}>{props.item.name}</div>
      </NavLink>
    </li>
  );
};

export default List;
