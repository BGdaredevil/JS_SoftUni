function passReset(input) {
  let row = "";
  let pass = input.shift();
  let orders = {
    TakeOdd(str) {
      let temp = str.split("").reduce((acc, el, index) => {
        if (index % 2 === 1) {
          acc = acc + el;
        }
        return acc;
      }, "");
      row += `${temp}\n`;
      return temp;
    },
    Cut(str, index, length) {
      index = Number(index);
      length = Number(length);
      let result = str.replace(str.substring(index, index + length), "");
      row += `${result}\n`;
      return result;
    },
    Substitute(str, old, theNew) {
      if (str.includes(old)) {
        let reg = new RegExp(old, "g");
        str = str.replace(reg, theNew);
        row += `${str}\n`;
      } else {
        row += `Nothing to replace!\n`;
      }
      return str;
    },
  };
  let line = input.shift();
  while (line !== "Done") {
    let [order, ...rest] = line.split(" ");
    pass = orders[order](pass, ...rest);
    line = input.shift();
  }
  row += `Your password is: ${pass}`;
  return row;
}

function fancy(input) {
  let list = [];
  let getValidCode = /(?<header>@#+)(?<code>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/g;
  let getDigits = /\d/g;
  let count = Number(input.shift());
  while (count > 0) {
    count--;
    let line = input.shift();
    let isValid = line.match(getValidCode);
    if (isValid) {
      let hasDigits = isValid.shift().match(getDigits);
      if (hasDigits) {
        list.push(
          `Product group: ${hasDigits.reduce((acc, el) => (acc += el), "")}`
        );
      } else {
        list.push(`Product group: 00`);
      }
    } else {
      list.push("Invalid barcode");
    }
  }
  return list.join("\n");
}

function heroes(input) {
  let count = Number(input.shift());
  let row = "";
  let heroes = {};
  let orders = {
    CastSpell(name, neededMana, spell) {
      neededMana = Number(neededMana);
      if (heroes[name].MP >= neededMana) {
        heroes[name].MP -= neededMana;
        row += `${name} has successfully cast ${spell} and now has ${heroes[name].MP} MP!\n`;
      } else {
        row += `${name} does not have enough MP to cast ${spell}!\n`;
      }
    },
    TakeDamage(name, dmg, attacker) {
      dmg = Number(dmg);
      heroes[name].HP -= dmg;
      if (heroes[name].HP > 0) {
        row += `${name} was hit for ${dmg} HP by ${attacker} and now has ${heroes[name].HP} HP left!\n`;
      } else {
        delete heroes[name];
        row += `${name} has been killed by ${attacker}!\n`;
      }
    },
    Recharge(name, manaPot) {
      manaPot = Number(manaPot);
      if (heroes[name].MP + manaPot > 200) {
        row += `${name} recharged for ${200 - heroes[name].MP} MP!\n`;
        heroes[name].MP = 200;
      } else {
        row += `${name} recharged for ${manaPot} MP!\n`;
        heroes[name].MP += manaPot;
      }
    },
    Heal(name, healthPot) {
      healthPot = Number(healthPot);
      if (heroes[name].HP + healthPot > 100) {
        row += `${name} healed for ${100 - heroes[name].HP} HP!\n`;
        heroes[name].HP = 100;
      } else {
        row += `${name} healed for ${healthPot} HP!\n`;
        heroes[name].HP += healthPot;
      }
    },
  };
  let line = input.shift();
  while (line !== "End") {
    if (count > 0) {
      count--;
      let [name, health, mana] = line.split(" ");
      if (health > 100) {
        health = 100;
      }
      if (mana > 200) {
        mana = 200;
      }
      if (!heroes.hasOwnProperty(name)) {
        heroes[name] = { name, HP: Number(health), MP: Number(mana) };
      }
    } else {
      let [order, ...rest] = line.split(" - ");
      orders[order](...rest);
    }
    line = input.shift();
  }
  row += Object.values(heroes)
    .sort((a, b) => b.HP - a.HP || a.name.localeCompare(b.name))
    .reduce((acc, el) => {
      acc += `${el.name}\n  HP: ${el.HP}\n  MP: ${el.MP}\n`;
      return acc;
    }, "");
  return row;
}
console.log(
  heroes([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
  ])
);
