import React, { useContext } from "react";
import StateComponent from "../State/StateComponent";
import List from "./List";

const ListContainer = () => {
  const state = useContext(StateComponent);
  return (
    <ul>
      {Object.values(state.getCards()).map((item) => (
        <List item={item} key={item.name} />
      ))}
    </ul>
  );
};

export default ListContainer;
