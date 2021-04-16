function attachEventsListeners() {
  let allBtn = [];
  allBtn.push(document.querySelector("#daysBtn"));
  allBtn.push(document.querySelector("#hoursBtn"));
  allBtn.push(document.querySelector("#minutesBtn"));
  allBtn.push(document.querySelector("#secondsBtn"));

  allBtn.forEach((el) => el.addEventListener("click", calculate));

  function calculate(e) {
    let inputNum = Number(e.target.previousElementSibling.value);
    let inputTime = e.target.previousElementSibling.id;
    let calc = (num, timeFormat) => {
      let result = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
      switch (timeFormat) {
        case "days":
          result.days = num;
          result.hours = num * 24;
          result.minutes = num * 24 * 60;
          result.seconds = num * 24 * 60 * 60;
          break;
        case "hours":
          result.days = num / 24;
          result.hours = num;
          result.minutes = num * 60;
          result.seconds = num * 60 * 60;
          break;
        case "minutes":
          result.days = num / 60 / 24;
          result.hours = num / 60;
          result.minutes = num;
          result.seconds = num * 60;
          break;
        case "seconds":
          result.days = num / 60 / 60 / 24;
          result.hours = num / 60 / 60;
          result.minutes = num / 60;
          result.seconds = num;
          break;
      }
      return result;
    };

    let results = Object.values(calc(inputNum, inputTime));

    //console.log(allBtn)
    allBtn.forEach((el, index) => {
      el.previousElementSibling.value = results[index];
      //console.log(el.previousElementSibling)
    });
  }
}
