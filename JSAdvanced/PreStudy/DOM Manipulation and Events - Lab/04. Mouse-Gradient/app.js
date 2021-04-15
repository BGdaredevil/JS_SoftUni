function attachGradientEvents() {
  let box = document.getElementById("gradient");
  let boxWidth = Number(box.clientWidth);
  let result = document.getElementById("result");
  box.addEventListener("mousemove", (e) => {
    console.log(e);
    result.innerText = `${Math.floor(
      (Number(e.offsetX) / Number(box.clientWidth)) * 100
    ).toFixed(0)}%`;
    //result.innerText = `${e.offsetX}; ${box.scrollWidth}; ${box.offsetWidth}; ${box.clientWidth}`;
  });
  console.log(box);
  //console.log(boxWidth);
}
