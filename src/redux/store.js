import { combineReducers, legacy_createStore as createStore } from "redux";
import PasswordGeneratorReducer from "./PasswordGeneratorReducer";

let reducers = combineReducers({
    passwordGeneratorPage: PasswordGeneratorReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;