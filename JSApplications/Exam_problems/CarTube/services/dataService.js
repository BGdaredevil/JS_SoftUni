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

export const getMyCars = async (ownerId) =>
  await api.get(`${baseUrl}/data/cars?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);

export const getSpecificListing = async (id) => await api.get(`${baseUrl}/data/cars/${id}`);

export const delSpecificListing = async (id) => await api.del(`${baseUrl}/data/cars/${id}`);

export const updateListing = async (id, data) => await api.put(`${baseUrl}/data/cars/${id}`, data);

export const createListing = async (data) => await api.post(`${baseUrl}/data/cars`, data);

export const getByYear = async (year) => await api.get(`${baseUrl}/data/cars?where=year%3D${year}`);
