import { html } from "../node_modules/lit-html/lit-html.js";

export const loaderTemplate = () =>
  html`<article class="pad-large">
    <h1>Loading...</h1>
    <img src="https://i.pinimg.com/originals/ec/4e/c3/ec4ec39704cb0b03019d0724cb68e78b.jpg" />
  </article>`;

// add classes as per your css structure !!!

export const popupSection = (err) => {
  let temp = html`<section
    @click=${(e) => setTimeout(() => e.target.remove(), 3000)}
    id="notifications"
  >
    <div id="errorBox" class="notification" style="display: block">
      <span>${err.map((e) => html` <p>${e}</p> `)}</span>
    </div>
  </section>`;

  // setTimeout(temp.remove(), 2000);
  console.log(temp);
  return temp;
};
