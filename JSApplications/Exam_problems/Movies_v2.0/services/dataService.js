import * as api from "./apiService.js";
import { baseUrl } from "../app.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

//app specific requests below

export const getAllMovies = async () => await api.get(`${baseUrl}/data/movies`);

export const getSpecificMovie = async (id) => await api.get(`${baseUrl}/data/movies/${id}`);

export const createMovie = async (data) => await api.post(`${baseUrl}/data/movies`, data);

export const delMovie = async (id) => await api.del(`${baseUrl}/data/movies/${id}`);

export const updateMovie = async (id, data) => await api.put(`${baseUrl}/data/movies/${id}`, data);

export const likeAMovie = async (id) => await api.post(`${baseUrl}/data/likes`, { movieId: id });

export const getLikesCount = async (id) =>
  await api.get(`${baseUrl}/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);

export const getLikesByUser = async (userId, movieId) =>
  await api.get(
    `${baseUrl}/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
  );
