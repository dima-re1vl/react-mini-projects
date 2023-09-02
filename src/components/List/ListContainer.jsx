import React, { useContext } from "react";
import List from "./List";
import s from "./List.module.css";
import { connect } from "react-redux";

const ListContainer = (props) => {
  return (
    <ul className={s.ul}>
      {Object.values(props.cards).map((item) => (
        <List item={item} key={item.name} />
      ))}
    </ul>
  );
};

let mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(ListContainer);
