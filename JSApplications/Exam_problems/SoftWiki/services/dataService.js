import * as api from "./apiService.js";
import { baseUrl } from "../app.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below

export const createArticle = async (data) => await api.post(`${baseUrl}/data/articles`, data);

export const getAllcontent = async () => await api.get(`${baseUrl}/data/articles`);

export const getSingleArticle = async (id) => await api.get(`${baseUrl}/data/articles/${id}`);

export const delSpecificArticle = async (id) => await api.del(`${baseUrl}/data/articles/${id}`);

export const updateSpecificArticle = async (id, data) =>
  await api.put(`${baseUrl}/data/articles/${id}`, data);
