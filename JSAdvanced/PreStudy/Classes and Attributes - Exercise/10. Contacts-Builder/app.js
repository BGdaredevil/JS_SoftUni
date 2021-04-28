class Contact {
  constructor(fName, lName, phone, eMail) {
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.eMail = eMail;
    this._online = false;
  }

  render(targetID) {
    let targetElement = document.getElementById(targetID);
    let hiddenDiv = e(
      "div",
      "info",
      e("span", null, `&phone; ${this.phone}`),
      e("span", null, `&#9993 ${this.eMail}`)
    );
    hiddenDiv.style.display = "none";

    let visibleDiv = e(
      "div",
      "title",
      `${this.fName} ${this.lName}`,
      e("button", null, "&#8505")
    );

    if (this._online) {
      visibleDiv.classList.add("online");
    }

    let card = e("article", null, visibleDiv, hiddenDiv);

    card.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.tagName === "BUTTON") {
        if (e.target.parentElement.nextSibling.style.display === "none") {
          e.target.parentElement.nextSibling.style.display = "block";
        } else {
          e.target.parentElement.nextSibling.style.display = "none";
        }
      }
    });

    targetElement.appendChild(card);

    function e(tag, setClass, ...content) {
      let result = document.createElement(tag);
      if (setClass !== null) {
        result.classList.add(setClass);
      }
      content.forEach((el) => {
        if (typeof el === "string") {
          result.innerText = el;
        } else {
          result.appendChild(el);
        }
      });
      return result;
    }
  }

  set online(state) {
    //console.log("helllo");
    this._online = state;
    //console.log(document.querySelectorAll("article > div.title"));

    if (document.querySelectorAll("article > div.title").length != 0) {
      if (this._online) {
        Array.from(document.querySelectorAll("article > div.title"))
          .filter((el) => el.innerText.includes(this.fName))[0]
          .classList.add("online");
        //console.log(lala);
      } else {
        Array.from(document.querySelectorAll("article > div.title"))
          .filter((el) => el.innerText.includes(this.fName))[0]
          .classList.remove("online");
      }
    }
  }

  get online() {
    return this._online;
  }
}

// let contact = new Contact(
//   "Ivan",
//   "Ivanov",
//   "0888 123 456",
//   "i.ivanov@gmail.com"
// );
// contact.render("main");
// // //console.log(contacts);
// // // After 1 second, change the online status to true
// setTimeout(() => (contact.online = true), 2000);

// setTimeout(() => console.log(document.querySelectorAll(".title")), 2500);

// // Check if online property changes title style

document.body.innerHTML = `<div id="holder"></div>`;
//let Contact = result;
let data = {
  firstName: "Ivan",
  lastName: "Ivanov",
  phone: "0888 123 456",
  email: "i.ivanov@gmail.com",
};
let contact;
contact = new Contact(data.firstName, data.lastName, data.phone, data.email);
contact.online = true;
contact.render("holder");
console.log(document.querySelector("#holder > article"));
let element = document.querySelector("#holder");
console.log(element.length);
vrfyElement(element, data);
function vrfyElement(element, data) {
  console.log(element.classList);
}
