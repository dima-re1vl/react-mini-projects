import React from "react";

class FindPersonCards extends React.Component {
  constructor(props) {
    super(props);
    this.func = this.func.bind(this);
  }

  func() {
    console.log(123);
  }

  render() {
    return this.func();
  }
}

export default FindPersonCards;
