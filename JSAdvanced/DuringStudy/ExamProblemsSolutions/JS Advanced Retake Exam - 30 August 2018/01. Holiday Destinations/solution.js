function addDestination() {
  let [
    summerCount,
    autumnCount,
    winterCount,
    springCount,
  ] = document.querySelectorAll("div#summaryBox > input");
  let [cityElement, countryElement] = document.querySelectorAll(
    "div#input > input"
  );

  let seasonElement = document.querySelector("div#input > select");

  if (
    cityElement.value === "" ||
    countryElement.value === "" ||
    seasonElement.value === ""
  ) {
    return;
  }

  document
    .querySelector("#destinationsList")
    .appendChild(
      el(
        "tr",
        el("td", `${str(cityElement.value)}, ${str(countryElement.value)}`),
        el("td", str(seasonElement.value))
      )
    );

  let counters = {
    summer: () => {
      let num = Number(summerCount.value);
      summerCount.value = ++num;
    },
    autumn: () => {
      let num = Number(autumnCount.value);
      autumnCount.value = ++num;
    },
    winter: () => {
      let num = Number(winterCount.value);
      winterCount.value = ++num;
    },
    spring: () => {
      let num = Number(springCount.value);
      springCount.value = ++num;
    },
  };

  counters[seasonElement.value]();

  cityElement.value = "";
  countryElement.value = "";
  seasonElement.value = "";

  function str(str) {
    str = str.split("");
    str[0] = str[0].toUpperCase();
    return str.join("");
  }

  function el(tag, ...content) {
    let result = document.createElement(tag);
    content.forEach((c) => {
      if (typeof c === "string") {
        result.textContent = c;
      } else {
        result.appendChild(c);
      }
    });
    return result;
  }
}

// city.value = "Madrid";
// country.value = "Spain";
// $('#seasons').val('spring');

// result();

// city.value = "Berlin";
// country.value = "Germany";
// $('#seasons').val('spring');

// result();

// city.value = "Rome";
// country.value = "Italy";
// $('#seasons').val('summer');

// result();

// city.value = "Bansko";
// country.value = "Bulgaria";
// $('#seasons').val('winter');

// result();

// city.value = "Nea Paramos";
// country.value = "Greece";
// $('#seasons').val('autumn');

// result();

// expect($('#summer').val()).to.equal('1', 'Destinations per Summer season is not updated correctly');
// expect($('#autumn').val()).to.equal('1', 'Destinations per Autumn season is not updated correctly');
// expect($('#winter').val()).to.equal('1', 'Destinations per Winter season is not updated correctly');
// expect($('#spring').val()).to.equal('2', 'Destinations per Spring season is not updated correctly');
