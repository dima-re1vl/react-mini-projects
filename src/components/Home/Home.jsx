import React, { useContext } from "react";
import s from "./Home.module.css";
import StateComponent from "../State/StateComponent";
import Card from "../Card/Card";

const Home = () => {
  document.title = "Home";
  const state = useContext(StateComponent);
  return (
    <div className="home">
      <div className="container">
        <div className={s.cards}>
          {Object.values(state.getCards()).map((item) => (
            <Card item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
