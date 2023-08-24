import React, { useContext } from "react";
import StateComponent from "../State/StateComponent";
import List from "./List";

const ListContainer = () => {
  const state = useContext(StateComponent);

  return (
    <ul>
      {state.map((item) => (
        <List item={item} />
      ))}
    </ul>
  );
};

export default ListContainer;
