import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import Page from "../Reducers/index";

const combinedReducers = combineReducers({
  Page,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
