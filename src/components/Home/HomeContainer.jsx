import React from "react";
import { connect } from "react-redux";
import Home from "./Home";

const HomeContainer = (props) => {
  return <Home state={props} />;
};

let mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(HomeContainer);
