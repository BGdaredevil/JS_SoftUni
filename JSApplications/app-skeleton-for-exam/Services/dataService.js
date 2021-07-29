import * as api from "./apiService.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below
