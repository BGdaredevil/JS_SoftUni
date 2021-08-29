import * as api from "./apiService.js";
import { baseUrl } from "../app.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below

export const createBook = async (book) => api.post(`${baseUrl}/data/books`, book);

export const getAllBooks = async () => api.get(`${baseUrl}/data/books?sortBy=_createdOn%20desc`);

export const getMyBooks = async (id) =>
  api.get(`${baseUrl}/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);

export const getOneBook = async (id) => api.get(`${baseUrl}/data/books/${id}`);

export const editBook = async (id, book) => api.put(`${baseUrl}/data/books/${id}`, book);

export const delBookFromDB = async (id) => api.del(`${baseUrl}/data/books/${id}`);

export const likeBook = async (data) => api.post(`${baseUrl}/data/likes`, data);

export const getLikes = async (id) =>
  api.get(`${baseUrl}/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`);

export const isLikedByUser = async (bookId, userId) =>
  api.get(
    `${baseUrl}/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
