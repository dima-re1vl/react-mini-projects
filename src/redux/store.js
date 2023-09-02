import { combineReducers, legacy_createStore as createStore } from "redux";
import PasswordGeneratorReducer from "./PasswordGeneratorReducer";
import CardsStateReducer from "./CardsStateReducer";
import FindPersonReducer from "./FindPersonReducer";

let reducers = combineReducers({
    passwordGeneratorPage: PasswordGeneratorReducer,
    cards: CardsStateReducer,
    findPerson: FindPersonReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;