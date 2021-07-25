import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";

const teamCardTemplate = (team) => html` <article class="layout">
  <img src=${team.logoUrl} class="team-logo left-col" />
  <div class="tm-preview">
    <h2>${team.name}</h2>
    <p>${team.description}</p>
    <span class="details">${team.members.length} Members</span>
    <div><a href="/team-home/${team._id}" class="action">See details</a></div>
  </div>
</article>`;

const browseTemplate = (list, isUser) => html`<section id="browse">
  <article class="pad-med">
    <h1>Team Browser</h1>
  </article>

  ${isUser
    ? html`<article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
      </article>`
    : ""}
  ${list.map((t) => teamCardTemplate(t))}
</section>`;

export async function browseView(ctx) {
  const populator = async () => {
    let teamsList = await getTeams();
    for (const team of teamsList) {
      let members = await getTeamMembers(team);
      team.members = members;
    }

    return browseTemplate(teamsList, isLogged());
  };

  ctx.render(until(populator(), loaderTemplate()));
}
