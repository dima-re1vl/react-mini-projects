import React from "react";
import s from "./Home.module.css";
import Card from "../Card/Card";

const Home = (props) => {
  document.title = "Home";
  return (
    <div className="home">
      <div className="container">
        <div className={s.cards}>
          {Object.values(props.state.cards).map((item) => (
            <Card item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
