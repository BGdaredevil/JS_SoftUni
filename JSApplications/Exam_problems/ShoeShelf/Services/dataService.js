import * as api from "./apiService.js";
import { baseUrl } from "../app.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below
export const getAllShoes = async () => {
  let key = encodeURIComponent(`purchases=itemId:purchases`);
  return await api.get(`${baseUrl}/data/shoes?load=${key}`);
};

export const getSpecificShoe = async (id) => await api.get(`${baseUrl}/data/shoes/${id}`);

export const getPurchases = async (id) => {
  let component = encodeURIComponent(`itemId="${id}"`);
  return await api.get(`${baseUrl}/data/purchases?where=${component}`);
};

export const createNewShoe = async (shoe) => await api.post(`${baseUrl}/data/shoes`, shoe);

export const updateShoe = async (id, shoe) => await api.put(`${baseUrl}/data/shoes/${id}`, shoe);

export const purchaseShoe = async (data) => await api.post(`${baseUrl}/data/purchases`, data);

export const delSpecificShoe = async (id) => await api.del(`${baseUrl}/data/shoes/${id}`);
