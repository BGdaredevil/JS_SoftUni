import { html } from "./node_modules/lit-html/lit-html.js";

export let loadBtn = (load) => html`<button id="loadBooks" @click=${load}>LOAD ALL BOOKS</button>`;

let tableRow = (data, d, e) => html` <tr>
  <td>${data.title}</td>
  <td>${data.author}</td>
  <td data-id="${data._id}">
    <button @click=${e}>Edit</button>
    <button @click=${d}>Delete</button>
  </td>
</tr>`;

export let table = (allBooks, del, edit) => html` <table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    ${allBooks.map((b) => tableRow(b, del, edit))}
  </tbody>
</table>`;

let idInput = (d) => html`<input type="hidden" name="id" value="${d._id}" />`;

export let form = (formTypeData) => html`
  <form id=${formTypeData.type === "add" ? "add-form" : "edit-form"} @submit=${formTypeData.event}>
    ${formTypeData.type === "add" ? "" : idInput(formTypeData)}
    <h3>${formTypeData.type === "add" ? "Add book" : "Edit book"}</h3>
    <label>TITLE</label>
    <input
      type="text"
      name="title"
      placeholder="Title..."
      .value=${formTypeData.type === "add" ? "" : formTypeData.title}
    />
    <label>AUTHOR</label>
    <input
      type="text"
      name="author"
      placeholder="Author..."
      .value=${formTypeData.type === "add" ? "" : formTypeData.author}
    />
    <input type="submit" .value="${formTypeData.type === "add" ? "Submit" : "Save"}" />
  </form>
`;
export let bodyTemplate = (allBooks, formTypeData, del, edit, load) =>
  html`${loadBtn(load)}
    <section id="table-wraper">${table(allBooks, del, edit)}</section>
    <section id="form-wraper">${form(formTypeData)}</section>`;
