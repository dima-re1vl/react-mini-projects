import { createContext } from "react";

let state = {
  _cards: {
    password: {
      name: "Password Generator",
      link: "/passwordGenerator",
      img: "https://media.wired.com/photos/641e1a1b43ffd37beea02cdf/4:3/w_4497,h_3373,c_limit/Best%20Password%20Managers%20Gear%20GettyImages-1408198405.png",
      description:
        "Welcome to our site for generating personal passwords! Whether you need a strong passcode or a creative security key, our intuitive tool lets you customize length, numbers, symbols, and letters. Ensure your online security with unique passwords easily created here.",
    },
  },
  _passwordGeneratorState: {
    password: "",
    uppers: false,
    lowers: false,
    symbols: false,
    numbers: false,
    length: 4,

    setPassword(value) {
      this.inputText = value;
    },
    setLength() {
      this.length = document.querySelector(".inputNumber").value;
    },
    setValue(value) {
      switch (value) {
        case "uppers":
          this.uppers = !this.uppers;
          break;
        case "lowers":
          this.lowers = !this.lowers;
          break;
        case "symbols":
          this.symbols = !this.symbols;
          break;
        case "numbers":
          this.numbers = !this.numbers;
          break;
      }
    },
  },

  getCards() {
    return this._cards;
  },

  getPasswordGeneratorState() {
    return this._passwordGeneratorState;
  },
};

const StateComponent = createContext(state);

export default StateComponent;
