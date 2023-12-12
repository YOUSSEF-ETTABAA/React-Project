import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slices/LoginSlice";


const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;