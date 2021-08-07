import * as api from "./apiService.js";
import { baseUrl } from "../app.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below

export const getAllListings = async () =>
  await api.get(`${baseUrl}/data/cars?sortBy=_createdOn%20desc`);

export const getOneListing = async (id) => await api.get(`${baseUrl}/data/cars/${id}`);

export const getMyListings = async (id) =>
  await api.get(`${baseUrl}/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);

export const getListingsByYear = async (num) =>
  await api.get(`${baseUrl}/data/cars?where=year%3D${num}`);

export const delListing = async (id) => await api.del(`${baseUrl}/data/cars/${id}`);

export const createListing = async (data) => await api.post(`${baseUrl}/data/cars`, data);

export const updateListing = async (id, data) => await api.put(`${baseUrl}/data/cars/${id}`, data);
