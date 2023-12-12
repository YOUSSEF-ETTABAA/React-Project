import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const value = localStorage.getItem("loggedIn");

if (value === null) {
  localStorage.setItem("loggedIn", "false");
}

const storedUsers = localStorage.getItem("Users");
const value2 = storedUsers ? JSON.parse(storedUsers) : [];

const state = localStorage.getItem("UserState");
const userState = state ? JSON.parse(state) : value2;

const initialState = {
  loggedIn: value === "true",
  CurrentUser: userState,
};


export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("loggedIn", "true");
      let loggedInUser;
      for (let i = 0; i < action.payload.length; i++) {
        if (action.payload[i].mood === "SignIn") {
          loggedInUser = action.payload[i];
          localStorage.setItem("UserState", JSON.stringify(loggedInUser));
          break;
        }
      }
      return {
        ...state,
        loggedIn: true,
        CurrentUser: loggedInUser,
      };
    },
    logout: (state) => {
      localStorage.setItem("loggedIn", "false");
      localStorage.setItem("UserState", "");

      return {
        ...state,
        loggedIn: false,
      };
    },
    updateUserInfo: (state, action) => {
      let UpdateUsers = JSON.parse(localStorage.Users);

      const updateUserInfo = {
        ...state.CurrentUser,
        ...action.payload,
      };
      localStorage.setItem("UserState", JSON.stringify(updateUserInfo));
      for (let i = 0; i < UpdateUsers.length; i++) {
        if (UpdateUsers[i].mood === "SignIn") {
          UpdateUsers[i] = updateUserInfo;
          localStorage.setItem("Users", JSON.stringify(UpdateUsers));
          break;
        }
      }
      return {
        ...state,
        loggedIn: true,
        CurrentUser: updateUserInfo,
      };
    },
  },
});

export const { loginSuccess, logout, updateUserInfo } = LoginSlice.actions;
export default LoginSlice.reducer;
