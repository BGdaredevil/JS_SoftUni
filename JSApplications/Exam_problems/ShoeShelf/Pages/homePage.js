import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllShoes, getUser } from "../Services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const homeGuestTemplate = () => html`
  <div class="container">
    <div class="about-us">
      <div>
        <img src="../public/shoes.jpg" alt="" />
        <img src="../public/shoes2.jpg" alt="" />
      </div>
      <p><a href="/register">Register Now</a> and Try it!</p>
    </div>
  </div>
`;

const shoeTemplate = (shoe) => html` <div class="shoe">
  <img src=${shoe.imageUrl} />
  <h3>${shoe.brand} ${shoe.name}</h3>
  <a href="/details/${shoe._id}">Buy it for $${shoe.price.toFixed(2)}</a>
</div>`;

const homeUserTemplate = (data) => html` <div class="shoes">
  ${data.length === 0
    ? html` <h1>No shoes to display. Be the first to create a new offer...</h1> `
    : html` ${data.map((x) => shoeTemplate(x))} `}
</div>`;

export async function homeView(ctx) {
  console.log("homeView");

  const populator = async () => {
    const user = getUser();

    if (!user) {
      return homeGuestTemplate();
    }

    let data = await getAllShoes();

    data = data.map((shoe) => {
      shoe.purchases = shoe.purchases.filter((p) => p.itemId === shoe._id);
      return shoe;
    });
    console.log(data);
    return homeUserTemplate(data.sort((a, b) => b.purchases.length - a.purchases.length));
  };

  ctx.render(until(populator(), loaderTemplate()));
}
