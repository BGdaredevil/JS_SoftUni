// i know i should have a separate file for server request, but i have to do only one litle get ...
// also async/await is more convinient for the current application

// fetch("http://localhost:3030/jsonstore/advanced/dropdown")
//   .then((r) => r.json())
//   .then((res) => {
//     let data = Object.values(res);
//     console.log(data);
//   });

import { render } from "./node_modules/lit-html/lit-html.js";
import { selectTemplate } from "./template.js";

let url = "http://localhost:3030/jsonstore/advanced/dropdown";
let form = document.querySelector("form");
form.addEventListener("submit", formHandler);

let select = document.querySelector("#menu");
let data;

//get info from server and populate
(async () => {
  data = await askServer(url);
  data = await data.json();
  data = Object.values(data);
  render(selectTemplate(data), select);
})();

async function formHandler(e) {
  e.preventDefault();
  let info = new FormData(form);
  let txt = info.get("text");
  if (txt.trim() === "") {
    alert(`your string: ${txt} is not good enough for my function`);
    return;
  }
  let res = await askServer(url, "post", { text: txt }, true);
  data.push(res);
  form.reset();
  render(selectTemplate(data), select);
}

async function askServer(url, method = "get", body, skipReply, isLogged) {
  method = method.toLowerCase();
  const headers = {};

  if (typeof body === "object") {
    body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  if (isLogged) {
    headers["X-Authorization"] = getUserToken();
  }

  let answer = await fetch(url, { headers, method, body });

  if (!answer.ok) {
    let res = await answer.json();
    throw new Error(JSON.stringify(res));
  }

  if (skipReply) {
    return await answer.json();
  }

  return answer;
}
