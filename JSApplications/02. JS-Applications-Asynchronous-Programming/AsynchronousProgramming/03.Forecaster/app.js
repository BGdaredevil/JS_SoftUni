function attachEvents() {
  let inputInfo = document.getElementById("location");
  let getBtn = document.getElementById("submit");
  let resultDiv = document.getElementById("forecast");

  getBtn.addEventListener("click", () => {
    let locationsUrl = "http://localhost:3030/jsonstore/forecaster/locations";
    let todayBaseUrl = `http://localhost:3030/jsonstore/forecaster/today`;
    let upcommingBaseUrl = `http://localhost:3030/jsonstore/forecaster/upcoming`;

    fetch(locationsUrl)
      .then((r) => r.json())
      .then((locationsArr) => {
        //console.log(locationsArr);
        let { code } = locationsArr.find((obj) => obj.name === inputInfo.value);

        Promise.all([
          fetch(`${todayBaseUrl}/${code}`).then((r) => r.json()),
          fetch(`${upcommingBaseUrl}/${code}`).then((r) => r.json()),
        ])
          .then((res) => {
            let [now, next] = res;
            let selector = {
              Sunny: "\u2600",
              "Partly sunny": "\u26C5",
              Overcast: "\u2601",
              Rain: "\u2614",
              Degrees: "\u00b0",
            };
            resultDiv.style.display = "block";
            let currForecastDiv = el(
              "div",
              ["forecasts"],
              el("span", ["condition", "symbol"], selector[now.forecast.condition]),
              el(
                "span",
                ["condition"],
                el("span", ["forecast-data"], now.name),
                el(
                  "span",
                  ["forecast-data"],
                  `${now.forecast.low}${selector.Degrees}/${now.forecast.high}${selector.Degrees}`
                ),
                el("span", ["forecast-data"], now.forecast.condition)
              )
            );

            let temp = next.forecast.reduce((a, ele) => {
              a.push(
                el(
                  "span",
                  ["upcoming"],

                  el("span", ["symbol"], selector[ele.condition]),
                  el(
                    "span",
                    ["forecast-data"],
                    `${ele.low}${selector.Degrees}/${ele.high}${selector.Degrees}`
                  ),
                  el("span", ["forecast-data"], ele.condition)
                )
              );
              return a;
            }, []);

            let threeDayForecastDiv = el("div", ["forecast-info"], ...temp);

            if (resultDiv.querySelector("div.forecasts")) {
              resultDiv.querySelector("div.forecasts").remove();
            }

            if (resultDiv.querySelector("div.forecast-info")) {
              resultDiv.querySelector("div.forecast-info").remove();
            }

            resultDiv.querySelector("div#current").appendChild(currForecastDiv);
            resultDiv.querySelector("div#upcoming").appendChild(threeDayForecastDiv);
          })
          .catch(errorHandler);
      })
      .catch(errorHandler);
  });

  function errorHandler(errrr) {
    resultDiv.style.display = "block";
    resultDiv.innerText = "Error";
  }

  function el(tag, cl, ...content) {
    let result = document.createElement(tag);
    cl.forEach((c) => {
      result.classList.add(c);
    });
    content.forEach((c) => {
      if (typeof c === "string" || typeof c === "number") {
        result.innerText = c;
      } else {
        result.appendChild(c);
      }
    });

    return result;
  }
}

attachEvents();
