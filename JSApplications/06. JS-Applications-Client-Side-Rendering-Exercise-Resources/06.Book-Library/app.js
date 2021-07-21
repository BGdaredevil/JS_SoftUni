import { askServer } from "./dataService.js";
import { render } from "./node_modules/lit-html/lit-html.js";
import { bodyTemplate, form, table } from "./templates.js";

const root = document.querySelector("#root");
const url = `http://localhost:3030/jsonstore/collections/books`;
let tableWraper;
let formWraper;

const formSpec = {
  type: "add",
  event: formSubmit,
};

// i know it is different order than the server, but we save on requests to the server...
let mainBooks;

askServer(url, "get", undefined, true).then((allBooksObj) => {
  allBooksObj = Object.entries(allBooksObj).reduce((a, [k, b]) => {
    b._id = k;
    a.push(b);
    return a;
  }, []);
  mainBooks = allBooksObj;
  console.log(mainBooks);
  render(bodyTemplate(allBooksObj, formSpec, del, edit, load), root);
  tableWraper = document.querySelector("#table-wraper");
  formWraper = document.querySelector("#form-wraper");
});

async function formSubmit(e) {
  e.preventDefault();
  let data = new FormData(e.target);

  data = {
    title: data.get("title"),
    author: data.get("author"),
  };

  if (data.title.trim() == "" || data.author.trim() == "") {
    alert("pls write all info for the book");
    return;
  }

  let method = {
    "add-form": "post",
    "edit-form": "put",
  };

  console.log(e.target.id.value);

  let serverRes = {
    "add-form": askServer.bind(this, url, method[e.target.getAttribute("id")], data, true),
    "edit-form": askServer.bind(
      this,
      `${url}/${e.target.id.value}`,
      method[e.target.getAttribute("id")],
      data,
      true
    ),
  };

  let res = await serverRes[e.target.getAttribute("id")]();
  if (res._id === undefined) {
    res._id = e.target.id.value;
  }
  mainBooks = mainBooks.filter((b) => b._id !== res._id);
  console.log(res);
  mainBooks.push(res);
  console.log(mainBooks);
  e.target.reset();
  // alert("please click load btn");
  render(form(formSpec), formWraper);
  // auto reloading of data in the table:
  load();
}

async function del(e) {
  // i could make this handle both edit and del cases, but we will see if i have the time today
  let res = await askServer(`${url}/${e.target.parentNode.dataset.id}`, "delete");
  res = await res.json();
  mainBooks = mainBooks.filter((b) => b._id !== res._id);
  // console.log(e.target.parentNode.dataset.id, "delete");
  // auto reloading of data in the table:
  load();
}

async function edit(e) {
  let res = await askServer(`${url}/${e.target.parentNode.dataset.id}`, "get");
  res = await res.json();
  res._id = e.target.parentNode.dataset.id;
  let editFormSpec = Object.assign({}, formSpec);
  editFormSpec.type = "edit";
  editFormSpec = Object.assign(editFormSpec, res);
  // console.log(editFormSpec);
  render(form(editFormSpec), formWraper);
  // auto reloading of data in the table:
  load();
}

function load() {
  // askServer(url, "get", undefined, true).then((allBooksObj) => {
  //   allBooksObj = Object.entries(allBooksObj).reduce((a, [k, b]) => {
  //     b._id = k;
  //     a.push(b);
  //     return a;
  //   }, []);
  //   mainBooks = allBooksObj;
  //   console.log("load", tableWraper, mainBooks);
  render(table(mainBooks, del, edit), tableWraper);
  // });
}
