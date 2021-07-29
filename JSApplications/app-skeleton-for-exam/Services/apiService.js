export const settings = {
  baseUrl: "",
};

export async function login(email, password) {
  const reply = await post(`${settings.baseUrl}/users/login`, { email, password });
  localStorage.setItem("user", JSON.stringify(reply));
  return reply;
}
export async function register(username, email, password) {
  const reply = await post(`${settings.baseUrl}/users/register`, { username, email, password });
  localStorage.setItem("user", JSON.stringify(reply));
  return reply;
}
export async function logout() {
  const reply = await get(`${settings.baseUrl}/users/logout`);
  localStorage.removeItem("user");
  return reply;
}

async function askServer(url, options) {
  try {
    const responce = await fetch(url, options);

    if (!responce.ok) {
      let msg = await responce.json();
      throw new Error(msg.message);
    }

    let data = await responce.json().catch((e) => responce);
    // console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}

function getOptions(method = "get", body) {
  const options = {
    method: method.toLowerCase(),
    headers: {},
  };

  if (localStorage.getItem("userToken") !== null) {
    options.headers["X-Authorization"] = localStorage.getItem("userToken");
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

export const get = async (url) => await askServer(url, getOptions());

export const post = async (url, data) => await askServer(url, getOptions("post", data));

export const put = async (url, data) => await askServer(url, getOptions("put", data));

export const del = async (url) => await askServer(url);

export const clearLocalStorage = () => localStorage.removeItem("user");
