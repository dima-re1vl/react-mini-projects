import React, { Fragment, useContext } from "react";
import s from "./PasswordGenerator.module.css";

const PasswordGeneratorSettings = (props) => {
  return (
    <Fragment>
      <div className={s.generateBtn}>
        <button
          type="submit"
          className={s.btn}
          onClick={() => props.state.generatePassword()}
        >
          Generate
        </button>
      </div>
      <div className={s.inputLength}>
        <input
          type="number"
          className={`${s.inputNumber} inputNumber`}
          value={props.state.passwordGeneratorState.passLength}
          onChange={(e) => {
            props.state.setLength(e.target.value);
          }}
          min={0}
          max={20}
        />
        <h3>{`<-- Password Length`}</h3>
      </div>

      <div className={s.checkboxes}>
        <div className={`${s.uppers} ${s.checkbox}`}>
          <input
            type="checkbox"
            id="uppers"
            name="uppers"
            onChange={() => {
              props.state.setUppers();
            }}
            checked={props.state.passwordGeneratorState.uppers}
          />
          <label htmlFor="uppers" className="uppers">
            Capitals Letters
          </label>
        </div>

        <div className={`${s.lowers} ${s.checkbox}`}>
          <input
            type="checkbox"
            id="lowers"
            name="lowers"
            onChange={() => {
              props.state.setLowers();
            }}
            checked={props.state.passwordGeneratorState.lowers}
          />
          <label htmlFor="lowers" className="lowers">
            Small Letters
          </label>
        </div>

        <div className={`${s.numbers} ${s.checkbox}`}>
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            onChange={() => {
              props.state.setNumbers();
            }}
            checked={props.state.passwordGeneratorState.numbers}
          />
          <label htmlFor="numbers" className="numbers">
            Numbers
          </label>
        </div>

        <div className={`${s.symbols} ${s.checkbox}`}>
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            onChange={() => {
              props.state.setSymbols();
            }}
            checked={props.state.passwordGeneratorState.symbols}
          />
          <label htmlFor="symbols" className="symbols">
            Symbols
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default PasswordGeneratorSettings;
