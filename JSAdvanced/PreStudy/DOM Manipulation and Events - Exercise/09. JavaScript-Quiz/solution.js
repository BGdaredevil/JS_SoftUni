function solve() {
  let loc = 1;
  let sections = Array.from(document.getElementsByTagName("section"));
  let answers = {};
  sections.forEach((section) =>
    section.addEventListener("click", (e) => {
      if (e.target.tagName === "P") {
        answers[loc] = e.target.textContent;

        let temp = document.getElementsByTagName("section");
        temp[loc - 1].style.display = "none";

        if (loc < sections.length) {
          sections[loc].classList.remove("hidden");
          temp[loc++].style.display = "block";
        } else {
          loc++;
          giveResult(answers);
        }
      }
    })
  );

  function giveResult(info) {
    document.querySelector("div#quizzie ul#results").style.display = "block";
    let userInput = Object.values(info).slice(0, 3);
    let correct = [
      "onclick",
      "JSON.stringify()",
      "A programming API for HTML and XML documents",
    ];
    let outcome = userInput.reduce(
      (acc, ans, index) => {
        if (ans === correct[index]) {
          acc.correct++;
        } else {
          acc.wrong++;
        }
        return acc;
      },
      {
        correct: 0,
        wrong: 0,
      }
    );
    if (outcome.wrong === 0) {
      document.querySelector(
        "div#quizzie ul#results li.results-inner h1"
      ).textContent = "You are recognized as top JavaScript fan!";
    } else {
      document.querySelector(
        "div#quizzie ul#results li.results-inner h1"
      ).textContent = `You have ${outcome.correct} right answers`;
    }
  }
}
