function garageOriginal(input) {
  let garages = {};
  let i = 0;
  for (const line of input) {
    let [garageIndex, carInfo] = line.split(" - ");
    //garageIndex = Number(garageIndex);
    if (!garages[garageIndex]) {
      garages[garageIndex] = {};
    }
    garages[garageIndex][`car${i}`] = {};
    carInfo = carInfo.split(", ");
    carInfo.forEach((info) => {
      let [key, value] = info.split(": ");
      garages[garageIndex][`car${i}`][key] = value;
    });
    i++;
  }
  Object.entries(garages).forEach((iv) => {
    console.log(`Garage № ${iv[0]}`);
    Object.values(iv[1]).forEach((ev) => {
      let row = "--- ";
      let semi = [];
      Object.entries(ev).forEach((th) => {
        semi.push(th.join(" - "));
      });
      row += semi.join(", ");
      console.log(row);
    });
  });
}

function garage(input) {
  let garagesMap = new Map();
  for (const line of input) {
    let availableCars = [];
    let [garage, carInfo] = line.split(" - ");
    if (!garagesMap.has(garage)) {
      availableCars.push(carInfo);
      garagesMap.set(garage, availableCars);
    } else {
      availableCars = garagesMap.get(garage);
      availableCars.push(carInfo);
      garagesMap.set(garage, availableCars);
    }
  }
  let temp = [...garagesMap.entries()];
  let output = "";
  for (let [currGarage, currCarKeyValue] of temp) {
    output += `Garage № ${currGarage}\n`;
    for (let currCarProperties of currCarKeyValue) {
      for (let everySymbol of currCarProperties) {
        currCarProperties = currCarProperties.replace(": ", " - ");
      }
      output += `--- ${currCarProperties}\n`;
    }
  }
  console.log(output);
}

function armies(input) {
  let armyList = new Map();
  for (const line of input) {
    let army = [0];
    if (line.includes(" arrives")) {
      let leader = line.replace(" arrives", "");
      armyList.set(leader, army);
    }
    if (line.includes(" defeated")) {
      let leader = line.replace(" defeated", "");
      armyList.delete(leader);
    }
    if (line.includes(": ")) {
      let [leaderName, armyInfo] = line.split(": ");
      if (armyList.has(leaderName)) {
        let [armyName, armyCount] = armyInfo.split(", ");
        armyCount = Number(armyCount);
        army = armyList.get(leaderName);
        army.push(
          Object.create(
            {},
            {
              armyName: { value: armyName, writable: true },
              armyCount: { value: armyCount, writable: true },
            }
          )
        );
        army[0] += armyCount;
        armyList.set(leaderName, army);
      }
    }
    if (line.includes(" + ")) {
      let [armyName, addCount] = line.split(" + ");
      addCount = Number(addCount);
      for (let row of [...armyList.values()]) {
        let isDone = false;
        for (let j = 0; j < row.length; j++) {
          if (row[j]["armyName"] === armyName) {
            row[j]["armyCount"] += addCount;
            row[0] += addCount;
            isDone = true;
            break;
          }
        }
        if (isDone) {
          break;
        }
      }
    }
  }
  let trys = Array.from(armyList.entries());
  let sortedMap = [...armyList.entries()].sort((a, b) => b[1][0] - a[1][0]);
  let result = "";
  for (let output of sortedMap) {
    result += `${output[0]}: ${output[1][0]}\n`;
    let temp = output.pop();
    temp.shift();
    temp.sort((a, b) => b.armyCount - a.armyCount);
    for (let item of temp) {
      result += `>>> ${item.armyName} - ${item.armyCount}\n`;
    }
  }
  console.log(result);
}

function commentsOld(input) {
  // 80/100
  let userList = new Map();
  let articleList = new Map();
  let comentList = {};

  for (let item of input) {
    if (item.includes("user ")) {
      item = item.replace("user ", "");
      userList.set(item);
    } else if (item.includes("article ")) {
      item = item.replace("article ", "");
      articleList.set(item, 0);
    } else if (item.includes(" posts on ")) {
      let [user, rest] = item.split(" posts on ");
      let [articleTitle, commentInfo] = rest.split(": ");
      if (userList.has(user) && articleList.has(articleTitle)) {
        let currCommentCount = articleList.get(articleTitle);
        currCommentCount += 1;
        articleList.set(articleTitle, currCommentCount);
        if (!comentList[articleTitle]) {
          comentList[articleTitle] = [item];
        } else {
          comentList[articleTitle].push(item);
        }
      }
    }
  }

  let test = Array.from(articleList).sort((a, b) => b[1] - a[1]);
  for (let line of test) {
    console.log(`Comments on ${line[0]}`);
    comentList[line[0]].sort().forEach((coment) => {
      let row = "--- ";
      let [user, rest] = coment.split(" posts on ");
      let [article, commentInform] = rest.split(": ");
      let [commentTitl, commentBody] = commentInform.split(", ");
      row += `From user ${user}: ${commentTitl} - ${commentBody}`;
      console.log(row);
    });
  }
}

function comments(input) {
  let userList = new Map();
  let articleList = new Map();

  for (const line of input) {
    if (line.includes("user ")) {
      let item = line.replace("user ", "");
      userList.set(item);
    } else if (line.includes("article ")) {
      let item = line.replace("article ", "");
      articleList.set(item, []);
    } else if (line.includes(" posts on ")) {
      let [user, rest] = line.split(" posts on ");
      let [articleTitle, commentInfo] = rest.split(": ");
      let [commentTitle, commentBody] = commentInfo.split(", ");
      if (userList.has(user) && articleList.has(articleTitle)) {
        let articleInfo = articleList.get(articleTitle);
        articleInfo.push({
          author: user,
          title: commentTitle,
          body: commentBody,
        });
        articleList.set(articleTitle, articleInfo);
      }
    }
  }
  let test = [...userList.keys()].sort();
  let ivan = [...articleList.entries()].sort(
    (a, b) => b[1].length - a[1].length
  );
  for (let artic of ivan) {
    console.log(`Comments on ${artic.shift()}`);
    let temp = artic.shift().sort((a, b) => a.author.localeCompare(b.author));
    for (let comment of temp) {
      console.log(
        `--- From user ${comment.author}: ${comment.title} - ${comment.body}`
      );
    }
  }
}

function bookShelf(input) {
  let shelvesList = new Map();
  let bookList = new Map();
  for (const line of input) {
    if (line.includes(" -> ")) {
      let [id, type] = line.split(" -> ");
      if (!shelvesList.has(type)) {
        let temp = [...shelvesList.values()];
        if (!temp.includes(id)) {
          shelvesList.set(type, id);
        }
      }
    } else if (line.includes(": ")) {
      let [bookTitle, rest] = line.split(": ");
      let [bookAuthor, genre] = rest.split(", ");
      let curShelves = [...shelvesList.keys()];
      if (curShelves.includes(genre)) {
        if (!bookList.has(genre)) {
          bookList.set(genre, [
            { bookTitle: bookTitle, bookAuthor: bookAuthor },
          ]);
        } else {
          let currBookList = bookList.get(genre);
          currBookList.push({ bookTitle: bookTitle, bookAuthor: bookAuthor });
          bookList.set(genre, currBookList);
        }
      }
    }
  }

  [...bookList.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .forEach((shelf) => {
      let [genre, books] = shelf;
      books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
      console.log(`${shelvesList.get(genre)} ${genre}: ${books.length}`);
      for (const book of books) {
        console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
      }
    });
}

function studentsOld(input) {
  // 50/100
  let coursesList = new Map();
  let studentList = new Map();

  for (const line of input) {
    if (line.includes(":")) {
      let [course, capacity] = line.split(":").map((string) => string.trim());
      if (!coursesList.has(course)) {
        coursesList.set(course, Number(capacity));
      } else {
        let currCap = coursesList.get(course);
        currCap += Number(capacity);
        coursesList.set(course, currCap);
      }
    } else if (line.includes("joins")) {
      let [
        studentName,
        studentCredits,
        wordWith,
        wordEmail,
        email,
        wordJoins,
        courseName,
      ] = line.split(/[ [\]]+/);
      if (coursesList.has(courseName)) {
        let currCap = coursesList.get(courseName);
        if (currCap > 0) {
          currCap -= 1;
          coursesList.set(courseName, currCap);
          if (!studentList.has(courseName)) {
            studentList.set(courseName, [
              {
                sName: studentName,
                sCredit: Number(studentCredits),
                email: email,
              },
            ]);
          } else {
            let med = studentList.get(courseName);
            med.push({
              sName: studentName,
              sCredit: studentCredits,
              email: email,
            });
            studentList.set(courseName, med);
          }
        }
      }
    }
  }

  [...studentList.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .forEach((course) => {
      let [name, students] = course;
      console.log(`${name}: ${coursesList.get(name)} places left`);
      students
        .sort((a, b) => b.sCredit - a.sCredit)
        .forEach((student) => {
          console.log(
            `--- ${student.sCredit}: ${student.sName}, ${student.email}`
          );
        });
    });
}

function students(input) {
  let coursesList = {};
  for (const line of input) {
    if (line.includes(":")) {
      let [course, capacity] = line.split(":").map((string) => string.trim());
      if (!coursesList.hasOwnProperty(course)) {
        coursesList[course] = { capacity: Number(capacity), students: [] };
      } else {
        coursesList[course].capacity += Number(capacity);
      }
    } else if (line.includes("joins")) {
      let [
        studentName,
        studentCredits,
        wordWith,
        wordEmail,
        email,
        wordJoins,
        courseName,
      ] = line.split(/[ [\]]+/);
      if (coursesList.hasOwnProperty(courseName)) {
        if (coursesList[courseName].capacity > 0) {
          coursesList[courseName].students.push({
            sName: studentName,
            sCredit: Number(studentCredits),
            email: email,
          });
          coursesList[courseName].capacity -= 1;
        }
      }
    }
  }
  Object.keys(coursesList)
    .sort(
      (a, b) => coursesList[b].students.length - coursesList[a].students.length
    )
    .forEach((course) => {
      console.log(`${course}: ${coursesList[course].capacity} places left`);
      coursesList[course].students
        .sort((a, b) => b.sCredit - a.sCredit)
        .forEach((student) => {
          console.log(
            `--- ${student.sCredit}: ${student.sName}, ${student.email}`
          );
        });
    });
}

students([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
