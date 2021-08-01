import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllMovies, getUser } from "../Services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const movieCardTemplate = (movie, user) => html` <div class="card mb-4">
  <img class="card-img-top" src=${movie.img} alt="Card image cap" width="400" />
  <div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
  </div>
  <div class="card-footer">
    ${user === null
      ? ""
      : html` <a href="/details/${movie._id}">
          <button type="button" class="btn btn-info">Details</button>
        </a>`}
  </div>
</div>`;

const homeTemplate = (data, user) => html` <section id="home-page">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
      <img
        src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
        class="img-fluid"
        alt="Responsive image"
        style="width: 150%; height: 200px"
      />
      <h1 class="display-4">Movies</h1>
      <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
  </section>

  <h1 class="text-center">Movies</h1>

  ${user !== null
    ? html` <section id="add-movie-button">
        <a href="/create" class="btn btn-warning ">Add Movie</a>
      </section>`
    : ""}

  <section id="movie">
    <div class=" mt-3 ">
      <div class="row d-flex d-wrap">
        <div class="card-deck d-flex justify-content-center">
          ${data.length > 0
            ? html` ${data.map((mov) => movieCardTemplate(mov, user))} `
            : html` <h3><strong> No movies :( - add the first one!</strong></h3> `}
        </div>
      </div>
    </div>
  </section>`;

export async function homeView(ctx) {
  const populator = async () => {
    const data = await getAllMovies();

    return homeTemplate(data, getUser());
  };

  ctx.render(until(populator(), loaderTemplate()));
}
