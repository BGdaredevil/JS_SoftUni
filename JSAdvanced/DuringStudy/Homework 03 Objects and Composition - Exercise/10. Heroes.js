function solve() {
  return {
    fighter(strn) {
      return {
        name: strn,
        health: 100,
        stamina: 100,
        fight() {
          this.stamina--;
          console.log(`${this.name} slashes at the foe!`);
        },
      };
    },
    mage(strn) {
      return {
        name: strn,
        health: 100,
        mana: 100,
        cast(str) {
          this.mana--;
          console.log(`${this.name} cast ${str}`);
        },
      };
    },
  };
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
