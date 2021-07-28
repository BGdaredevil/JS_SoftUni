export const settings = {
  baseUrl: "",
};

export async function login(email, password) {
  const reply = await post(`${settings.baseUrl}/users/login`, { email, password });
  localStorage.setItem("user", JSON.stringify(reply));
  return reply;
}
export async function register(user) {
  const reply = await post(`${settings.baseUrl}/users/register`, { ...user });
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

  const user = localStorage.getItem("user");

  if (user !== null) {
    options.headers["X-Authorization"] = JSON.parse(user).accessToken;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function get(url) {
  return await askServer(url, getOptions());
}

export async function post(url, data) {
  return await askServer(url, getOptions("post", data));
}

export async function put(url, data) {
  return await askServer(url, getOptions("put", data));
}

export async function del(url) {
  return await askServer(url, getOptions("delete"));
}

export function clearLocalStorage() {
  // localStorage.removeItem("user");
}
