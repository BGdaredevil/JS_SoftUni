//async

async function getInfo() {
  let baseUrl = "http://localhost:3030/jsonstore/bus/businfo";

  let stopInfoElement = document.getElementById("stopId");
  let stopNameElement = document.getElementById("stopName");
  let ulBussesElement = document.getElementById("buses");

  try {
    let busInfo = await fetch(`${baseUrl}/${stopInfoElement.value}`);
    busInfo = await busInfo.json();
    stopNameElement.innerText = busInfo.name;
    ulBussesElement.innerHTML = "";
    Object.entries(busInfo.buses).map(([busName, arrivesIn]) => {
      let newLiElement = document.createElement("li");
      newLiElement.innerText = `Bus ${busName} arrives in ${arrivesIn}`;
      ulBussesElement.appendChild(newLiElement);
    });
  } catch (err) {
    stopNameElement.innerText = "Error";
  }
}

//fetch

// function getInfo() {
//   let baseUrl = "http://localhost:3030/jsonstore/bus/businfo";

//   let stopInfoElement = document.getElementById("stopId");
//   let stopNameElement = document.getElementById("stopName");
//   let ulBussesElement = document.getElementById("buses");

//   fetch(`${baseUrl}/${stopInfoElement.value}`)
//     .then((r) => r.json())
//     .then((res) => {
//       stopNameElement.innerText = res.name;
//       ulBussesElement.innerHTML = "";
//       Object.entries(res.buses).map(([busName, arrivesIn]) => {
//         ulBussesElement.appendChild(
//           el("li", `Bus ${busName} arrives in ${arrivesIn}`)
//         );
//       });
//       console.log(res);
//     })
//     .catch((err) => {
//       stopNameElement.innerText = "Error";
//     });

//   function el(tag, cont) {
//     let result = document.createElement(tag);
//     result.innerText = cont;
//     return result;
//   }
// }
