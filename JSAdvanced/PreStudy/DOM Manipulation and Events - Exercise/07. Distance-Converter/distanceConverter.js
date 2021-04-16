function attachEventsListeners() {
  document.querySelector("#convert").addEventListener("click", () => {
    let input = Number(document.querySelector("#inputDistance").value);
    let from = document.querySelector("#inputUnits").value;
    let to = document.querySelector("#outputUnits").value;
    let output = document.querySelector("#outputDistance");
    let toMeters = {
      km(num) {
        return num * 1000;
      },
      m(num) {
        return num;
      },
      cm(num) {
        return num * 0.01;
      },
      mm(num) {
        return num * 0.001;
      },
      mi(num) {
        return num * 1609.34;
      },
      yrd(num) {
        return num * 0.9144;
      },
      ft(num) {
        return num * 0.3048;
      },
      in(num) {
        return num * 0.0254;
      },
    };
    let fromMeters = {
      km(num) {
        return num / 1000;
      },
      m(num) {
        return num;
      },
      cm(num) {
        return num / 0.01;
      },
      mm(num) {
        return num / 0.001;
      },
      mi(num) {
        return num / 1609.34;
      },
      yrd(num) {
        return num / 0.9144;
      },
      ft(num) {
        return num / 0.3048;
      },
      in(num) {
        return num / 0.0254;
      },
    };

    output.value = fromMeters[to](toMeters[from](input));
  });
}
