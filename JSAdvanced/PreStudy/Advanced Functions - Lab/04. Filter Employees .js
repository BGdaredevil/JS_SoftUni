function solve(input, criteria) {
  let [key, value] = criteria.split("-");

  let result = JSON.parse(input).reduce((acc, item) => {
    if (key != "all") {
      if (item[key] === value) {
        acc.push(
          `${acc.length}. ${item["first_name"]} ${item["last_name"]} - ${item.email}`
        );
      }
    } else {
      acc.push(
        `${acc.length}. ${item["first_name"]} ${item["last_name"]} - ${item.email}`
      );
    }

    return acc;
  }, []);

  result.map((el) => console.log(el));
}

console.log(
  solve(
    `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    "last_name-Johnson"
  )
);
