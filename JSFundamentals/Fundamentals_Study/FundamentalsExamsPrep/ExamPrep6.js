function passReset(input) {
  let [str, ...rest] = input;
  for (const line of rest) {
    let [order, item, indicaton] = line.split(" ");
    switch (order) {
      case "TakeOdd":
        let temp = [];
        for (const index in str) {
          if (index % 2 === 1) {
            temp.push(str[index]);
          }
        }
        str = temp.join("");
        console.log(str);
        break;
      case "Cut":
        let toRem = str.slice(Number(item), Number(item) + Number(indicaton));
        str = str.replace(toRem, "");
        console.log(str);
        break;
      case "Substitute":
        if (str.includes(item)) {
          while (str.includes(item)) {
            str = str.replace(item, indicaton);
          }
          console.log(str);
        } else {
          console.log(`Nothing to replace!`);
        }
        break;
      case "Done":
        console.log(`Your password is: ${str}`);
        break;
    }
  }
}

function barCode(input) {
  let count = Number(input.shift());
  let test = /(?<header>^@{1}#+)(?<code>[A-Z][a-zA-Z\d]{4,}[A-Z])@{1}#+$/;
  while (count > 0) {
    count--;
    let completeInfo = test.exec(input.shift());
    if (completeInfo === null) {
      console.log("Invalid barcode");
      continue;
    } else {
      completeInfo = completeInfo.groups.code;
    }
    let digits = "";
    for (const char of completeInfo) {
      if (!isNaN(char)) {
        digits += char;
      }
    }
    if (digits === "") {
      digits = "00";
    }
    console.log(`Product group: ${digits}`);
  }
}

function heroesVI(input) {
  let party = new Map();
  let count = Number(input.shift());
  while (count > 0) {
    count--;
    let [hName, hp, mp] = input.shift().split(" ");
    party.set(hName, { name: hName, health: Number(hp), mana: Number(mp) });
  }
  for (const line of input) {
    let [event, ...rest] = line.split(" - ");
    let hero;
    switch (event) {
      case "CastSpell":
        let [who, needMP, spell] = rest;
        needMP = Number(needMP);
        if (party.has(who)) {
          hero = party.get(who);
        } else {
          break;
        }
        if (hero.mana >= needMP) {
          hero.mana -= needMP;
          party.set(who, hero);
          console.log(
            `${hero.name} has successfully cast ${spell} and now has ${hero.mana} MP!`
          );
        } else {
          console.log(`${hero.name} does not have enough MP to cast ${spell}!`);
        }

        break;
      case "TakeDamage":
        let [partyMan, dmg, mob] = rest;
        if (party.has(partyMan)) {
          hero = party.get(partyMan);
        } else {
          break;
        }
        dmg = Number(dmg);
        hero.health -= dmg;
        if (hero.health > 0) {
          party.set(partyMan, hero);
          console.log(
            `${hero.name} was hit for ${dmg} HP by ${mob} and now has ${hero.health} HP left!`
          );
        } else {
          party.delete(partyMan);
          console.log(`${hero.name} has been killed by ${mob}!`);
        }
        break;
      case "Recharge":
        let [partyPers, ammo] = rest;
        if (party.has(partyPers)) {
          hero = party.get(partyPers);
        } else {
          break;
        }
        if (hero.mana + Number(ammo) > 200) {
          console.log(`${hero.name} recharged for ${200 - hero.mana} MP!`);
          hero.mana = 200;
        } else {
          console.log(`${hero.name} recharged for ${ammo} MP!`);
          hero.mana += Number(ammo);
        }
        party.set(partyPers, hero);
        break;
      case "Heal":
        let [partyAnimal, HP] = rest;
        if (party.has(partyAnimal)) {
          hero = party.get(partyAnimal);
        } else {
          break;
        }
        if (hero.health + Number(HP) > 100) {
          console.log(`${hero.name} healed for ${100 - hero.health} HP!`);
          hero.health = 100;
        } else {
          console.log(`${hero.name} healed for ${HP} HP!`);
          hero.health += Number(HP);
        }
        party.set(partyAnimal, hero);
        break;
      case "End":
        [...party.values()]
          .sort((a, b) => b.health - a.health)
          .forEach((el) => {
            console.log(`${el.name}\n  HP: ${el.health}\n  MP: ${el.mana}`);
          });
        break;
    }
  }
}
//80/100

function heroesIII(input) {
  let party = {};
  let count = Number(input.shift());
  const spendMana = (arr) => {
    let [who, neededMana, spelName] = arr;
    if (party.hasOwnProperty(who)) {
      if (party[who].mana >= neededMana) {
        party[who].mana -= neededMana;
        console.log(
          `${party[who].name} has successfully cast ${spelName} and now has ${party[who].mana} MP!`
        );
      } else {
        console.log(
          `${party[who].name} does not have enough MP to cast ${spelName}!`
        );
      }
    }
  };
  const spendHealth = (arr) => {
    let [who, dmg, mob] = arr;
    if (party.hasOwnProperty(who)) {
      party[who].health -= Number(dmg);
      if (party[who].health > 0) {
        console.log(
          `${party[who].name} was hit for ${dmg} HP by ${mob} and now has ${party[who].health} HP left!`
        );
      } else {
        console.log(`${party[who].name} has been killed by ${mob}!`);
        delete party[who];
      }
    }
  };
  const getMana = (arr) => {
    let [who, manaPoints] = arr;

    if (party[who].mana + Number(manaPoints) > 200) {
      console.log(
        `${party[who].name} recharged for ${200 - party[who].mana} MP!`
      );
      party[who].mana = 200;
    } else {
      console.log(`${party[who].name} recharged for ${manaPoints} MP!`);
      party[who].mana += Number(manaPoints);
    }
  };
  const getHealt = (arr) => {
    let [who, healthPoints] = arr;

    if (party.hasOwnProperty(who)) {
      if (party[who].health + Number(healthPoints) > 100) {
        console.log(
          `${party[who].name} healed for ${100 - party[who].health} HP!`
        );
        party[who].health = 100;
      } else {
        console.log(`${party[who].name} healed for ${healthPoints} HP!`);
        party[who].health += Number(healthPoints);
      }
    }
  };
  while (count > 0) {
    count--;
    let [heroName, hp, mp] = input.shift().split(" ");
    party[heroName] = { name: heroName, health: Number(hp), mana: Number(mp) };
  }

  for (const line of input) {
    let [event, ...rest] = line.split(" - ");
    switch (event) {
      case "CastSpell":
        spendMana(rest);
        break;
      case "TakeDamage":
        spendHealth(rest);
        break;
      case "Recharge":
        getMana(rest);
        break;
      case "Heal":
        getHealt(rest);
        break;
      case "End":
        Object.values(party)
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort((a, b) => b.health - a.health)
          .forEach((el) => {
            console.log(`${el.name}\n  HP: ${el.health}\n  MP: ${el.mana}`);
          });
        break;
    }
  }
}
//100/100
heroesIII([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Heal - Solmyr - 100",
  "Recharge - Solmyr - 50",
  "Recharge - Solmyr - 500",
  "TakeDamage - Kyrre - 5 - Orc",
  "Heal - Kyrre - 400",
  "CastSpell - Kyrre - 300 - ViewEarth",
  "End",
]);
