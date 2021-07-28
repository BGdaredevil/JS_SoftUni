import * as api from "./apiService.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

//app specific requests below
export const isLogged = () => (localStorage.getItem("user") ? true : false);

export const getUser = () => JSON.parse(localStorage.getItem("user"));

export async function createMeme(info) {
  return await api.post(`${api.settings.baseUrl}/data/memes`, info);
}

export async function getAllMemes() {
  return await api.get(`${api.settings.baseUrl}/data/memes?sortBy=_createdOn%20desc`);
}

export async function getOneMeme(id) {
  return await api.get(`${api.settings.baseUrl}/data/memes/${id}`);
}

export async function delMeme(id) {
  return await api.del(`${api.settings.baseUrl}/data/memes/${id}`);
}

export async function updateMeme(id, data) {
  return await api.put(`${api.settings.baseUrl}/data/memes/${id}`, data);
}

export async function getUserMemes(id) {
  return await api.get(
    `${api.settings.baseUrl}/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`
  );
}
