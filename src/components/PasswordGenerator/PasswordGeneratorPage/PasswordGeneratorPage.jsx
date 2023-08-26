import React from "react";
import s from "./PasswordGenerator.module.css";
import PasswordGeneratorSettings from "./PasswordGeneratorSettings";
import { connect } from "react-redux";
import {
  setUppers,
  setLowers,
  setNumbers,
  setSymbols,
  setLength,
  generatePassword,
} from "../../../redux/PasswordGeneratorReducer";

const PasswordGeneratorPage = (props) => {
  document.title = "Password Generator";
  return (
    <div className="container-app">
      <div className={s.app}>
        <h1 className={s.name}>{props.passwordGeneratorState.name}</h1>
        <div className={s.header}>
          <div className={s.password}>
            {props.passwordGeneratorState.password}
          </div>
          <i
            className={`fa-solid fa-copy ${s.copy}`}
            onClick={() => {
              const textarea = document.createElement("textarea");
              const password = props.passwordGeneratorState.password;

              if (!password) {
                return;
              }

              textarea.value = password;
              document.body.appendChild(textarea);
              textarea.select();
              document.execCommand("copy");
              textarea.remove();
              alert("Password copied to clipboard");
            }}
          ></i>
        </div>
        <div className={s.settings}>
          <PasswordGeneratorSettings state={props} />
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    passwordGeneratorState: state.passwordGeneratorPage,
  };
};

export default connect(mapStateToProps, {
  setUppers,
  setLowers,
  setNumbers,
  setSymbols,
  setLength,
  generatePassword,
})(PasswordGeneratorPage);
