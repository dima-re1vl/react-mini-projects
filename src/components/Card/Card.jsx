import React from "react";
import s from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <NavLink to={props.item.link} key={props.item.name}>
      <div className={s.card}>
        <div className={s.card_header}>
          <img
            src={props.item.img}
            alt={props.item.img}
            className={s.card_img}
          />
        </div>
        <div className={s.card_bottom}>
          <h1 className={s.card_title}>{props.item.name}</h1>
          <p className={s.card_description}>{props.item.description}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
