function toggle() {
  let butnText = document.getElementsByClassName("button")[0];
  let theDiv = document.getElementById("extra");

  if (theDiv.style.display === "block") {
    theDiv.style.display = "none";
    butnText.textContent = "More";
  } else {
    theDiv.style.display = "block";
    butnText.textContent = "Less";
  }
  //console.log(butnText);
  //console.log(theDiv);
}
