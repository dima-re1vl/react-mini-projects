import React from "react";
import { connect } from "react-redux";
import { setValue } from "../../redux/FindPersonReducer";
import s from "./FindPerson.module.css";
import FindPersonCards from "./FindPersonCards";

class FindPersonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderPerson = this.renderPerson.bind(this);
    this.gitHub = this.gitHub.bind(props);
  }

  renderPerson() {
    let res = document
      .querySelector(".results")
      .appendChild(document.createElement("div"))
      .classList.add("res");
    let value = this.props.findPerson.value;
    this.gitHub(value);
  }

  gitHub(value) {
    let el = document.querySelector(".res");
    async function FindGit() {
      await fetch(`https://api.github.com/users/${value}/repos?per_page=5`)
        .then((res) => res.json())
        .then((res) => toHTML(res));
    }

    function toHTML(res) {
      console.log(res);
      el.innerHTML = `
        <div></div>
      `;
    }

    FindGit();
  }

  render() {
    return (
      <div className={s.find_container}>
        <div className={s.settings}>
          <input
            type="text"
            value={this.props.value}
            onChange={(e) => {
              this.props.setValue(e.target.value);
            }}
            className={s.find_input}
          />
          <button onClick={this.renderPerson}>Find This</button>
        </div>
        <div className="results"></div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    findPerson: state.findPerson,
  };
};

export default connect(mapStateToProps, { setValue })(FindPersonContainer);
