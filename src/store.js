import { createStore } from "redux";
import { generateReducers } from "automate-redux";
import {menuKeys} from "./constants";

// Initial state of redux
const initialState = {
  uiState: {
    pendingRequests: 0,
    currentMenuKey: menuKeys.HOME
  }
};

// Generate reducers with the initial state and pass it to the redux store
export default createStore(generateReducers(initialState), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());