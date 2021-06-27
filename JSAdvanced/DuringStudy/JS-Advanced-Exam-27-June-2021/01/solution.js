window.addEventListener("load", solution);

function solution() {
  let fullNameInput = document.querySelector("#fname");
  let emailInput = document.querySelector("#email");
  let phoneInput = document.querySelector("#phone");
  let addressInput = document.querySelector("#address");
  let postCodeInput = document.querySelector("#code");

  let submitBtn = document.querySelector("#submitBTN");
  submitBtn.addEventListener("click", submitBTNOnClick);

  let editBtn = document.querySelector("#editBTN");
  editBtn.addEventListener("click", editBtnOnClick);

  let continueBtn = document.querySelector("#continueBTN");
  continueBtn.addEventListener("click", continueBtnOnClick);

  let previewElement = document.querySelector("#infoPreview");

  function editBtnOnClick(e) {
    let liEleemnts = previewElement.querySelectorAll("li");
    let fName = liEleemnts[0].textContent.replace("Full Name: ", "");
    let email = liEleemnts[1].textContent.replace("Email: ", "");
    let phone = liEleemnts[2].textContent.replace("Phone Number: ", "");
    let address = liEleemnts[3].textContent.replace("Address: ", "");
    let pCode = liEleemnts[4].textContent.replace("Postal Code: ", "");

    fullNameInput.value = fName;
    emailInput.value = email;
    phoneInput.value = phone;
    addressInput.value = address;
    postCodeInput.value = pCode;

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    Array.from(liEleemnts).forEach((e) => e.remove());
  }

  function continueBtnOnClick(e) {
    // Array.from(document.querySelector("#block").children).forEach((c) =>
    //   c.remove()
    // );

    document.querySelector("#block").innerHTML = "";

    document
      .querySelector("#block")
      .appendChild(ele("h3", ["Thank you for your reservation!"]));
  }

  function submitBTNOnClick(e) {
    if (fullNameInput.value === "" || emailInput.value === "") {
      return;
    }

    let info = [
      ele("li", [`Full Name: ${fullNameInput.value}`]),
      ele("li", [`Email: ${emailInput.value}`]),
      ele("li", [`Phone Number: ${phoneInput.value}`]),
      ele("li", [`Address: ${addressInput.value}`]),
      ele("li", [`Postal Code: ${postCodeInput.value}`]),
    ];

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    info.forEach((t) => previewElement.appendChild(t));

    //remember to clear
    fullNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    addressInput.value = "";
    postCodeInput.value = "";
  }

  function ele(tag, content) {
    let result = document.createElement(tag);
    //console.log(content);
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
