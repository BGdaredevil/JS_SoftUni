function solve() {
  let baseUrl = "http://localhost:3030/jsonstore/bus/schedule";
  let nextStop = "depot";
  let currStop = "";

  let infoBox = document.querySelector("div#info>span.info");
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");

  function depart() {
    fetch(`${baseUrl}/${nextStop}`)
      .then((r) => r.json())
      .then((res) => {
        currStop = res.name;
        infoBox.innerText = `Next stop ${currStop}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;

        nextStop = res.next;

        console.log(res);
      })
      .catch(() => {
        departBtn.disabled = true;
        arriveBtn.disabled = true;
        infoBox.innerText = "Error";
      });
  }

  function arrive() {
    departBtn.disabled = false;
    arriveBtn.disabled = true;
    infoBox.innerText = `Arriving at ${currStop}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
