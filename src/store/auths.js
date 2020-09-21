import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  },
  reducers: {
    userLoading: (user, action) => {
      user.isLoading = true;
    },
    userLoaded: (user, action) => {
      user.isAuthenticated = true;
      user.isLoading = false;
      user.user = action.payload;
    },
    successLogin: (user, action) => {
      localStorage.setItem("token", action.payload);
      user.isAuthenticated = true;
      user.isLoading = true;
    },
    successRegister: (user, action) => {
      localStorage.setItem("token", action.payload.token);
      user.isAuthenticated = true;
      user.isLoading = true;
    },
    errorAuth: (user, action) => {
      localStorage.removeItem("token");
      user.token = null;
      user.user = null;
      user.isLoading = false;
      user.isAuthenticated = false;
    },
    loginFail: (user, action) => {
      localStorage.removeItem("token");
      user.token = null;
      user.user = null;
      user.isLoading = false;
      user.isAuthenticated = false;
    },
    logoutSuccess: (user, action) => {
      localStorage.removeItem("token");
      user.token = null;
      user.user = null;
      user.isLoading = false;
      user.isAuthenticated = false;
    },
    failRegister: (user, action) => {
      localStorage.removeItem("token");
      user.token = null;
      user.user = null;
      user.isLoading = false;
      user.isAuthenticated = false;
    },
  },
});

export const {
  userLoading,
  userLoaded,
  successLogin,
  successRegister,
  errorAuth,
  loginFail,
  logoutSuccess,
  failRegister,
} = slice.actions;
export default slice.reducer;

const url = "/";

export const loadUser = () =>
  apiCallBegan({
    url: url + "user/me",
    onStart: userLoading.type,
    onSuccess: userLoaded.type,
    onError: errorAuth.type,
  });

export const registerUser = (user) =>
  apiCallBegan({
    url: url + "user",
    method: "post",
    data: user,
    onSuccess: successRegister.type,
    onError: failRegister.type,
  });

export const loginUser = (user) =>
  apiCallBegan({
    url: url + "auth",
    method: "post",
    data: user,
    onSuccess: successLogin.type,
    onError: loginFail.type,
  });
