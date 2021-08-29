import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllBooks, getMyBooks, getUser } from "../services/dataService.js";

const bookTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/details/${book._id}">Details</a>
  </li>
`;

const dashboardTemplate = (data) => html` <section id="dashboard-page" class="dashboard">
  <h1>Dashboard</h1>
  ${data.length > 0
    ? html`
        <ul class="other-books-list">
          ${data.map(bookTemplate)}
        </ul>
      `
    : html` <p class="no-books">No books in database!</p> `}
</section>`;

const myBooksTemplate = (data) => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    ${data.length > 0
      ? html`
          <ul class="my-books-list">
            ${data.map(bookTemplate)}
          </ul>
        `
      : html` <p class="no-books">No books in database!</p> `}
  </section>
`;

export async function dashboardView(ctx) {
  const populator = async () => {
    const data = await getAllBooks();
    return dashboardTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}

export async function myBooksView(ctx) {
  const populator = async () => {
    const data = await getMyBooks(getUser()._id);
    return myBooksTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
