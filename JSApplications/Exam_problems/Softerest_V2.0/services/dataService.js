import * as api from "./apiService.js";
import { baseUrl } from "../app.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below

export const createIdea = (data) => api.post(`${baseUrl}/data/ideas`, data);

export const getAllIdeas = () =>
  api.get(`${baseUrl}/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`);

export const getOneIdea = (id) => api.get(`${baseUrl}/data/ideas/${id}`);

export const deleteIdea = (id) => api.del(`${baseUrl}/data/ideas/${id}`);
