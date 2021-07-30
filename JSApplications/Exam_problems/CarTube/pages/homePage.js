import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const homeTemplate = (data) => html` <section id="main">
  <div id="welcome-container">
    <h1>Welcome To Car Tube</h1>
    <img class="hero" src="/images/car-png.webp" alt="carIntro" />
    <h2>To see all the listings click the link below:</h2>
    <div>
      <a href="/car-listings" class="button">Listings</a>
    </div>
  </div>
</section>`;

export async function homeView(ctx) {
  console.log("homeView");

  const populator = async () => {
    const data = "await pesho to go get the data";

    return homeTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
