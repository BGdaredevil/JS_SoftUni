class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = Number(capacity);
    this.clients = [];
    this.workLoad = 0;
    this.income = 0;
  }

  newCustomer(ownerName, petName, kind, procedures) {
    if (this.workLoad === this.capacity) {
      throw new Error("Sorry, we are not able to accept more patients!");
    }

    let owner = this.clients.filter((cl) => cl.oName === ownerName)[0];

    if (owner === undefined) {
      owner = {
        oName: ownerName,
      };
      owner[petName] = {
        kind: kind.toLowerCase(),
        procedures,
      };
      this.clients.push(owner);
      this.workLoad++;
      return `Welcome ${petName}!`;
    } else if (owner.hasOwnProperty(petName)) {
      if (owner[petName].procedures.length > 0) {
        throw new Error(
          `This pet is already registered under ${
            owner.oName
          } name! ${petName} is on our lists, waiting for ${owner[
            petName
          ].procedures.join(", ")}.`
        );
      } else {
        owner[petName].procedures = procedures;
        this.workLoad++;
        return `Welcome ${petName}!`;
      }
    } else {
      owner[petName] = {
        kind: kind.toLowerCase(), // upper lower case ????
        procedures,
      };
      //this.clients.push(owner);
      this.workLoad++;
      return `Welcome ${petName}!`;
    }
  }

  onLeaving(ownerName, petName) {
    let owner = this.clients.find((o) => o.oName === ownerName);

    if (owner === undefined) {
      throw new Error("Sorry, there is no such client!");
    }

    if (!owner.hasOwnProperty(petName)) {
      throw new Error(`Sorry, there are no procedures for ${petName}!`);
    } else if (owner[petName].procedures.length === 0) {
      throw new Error(`Sorry, there are no procedures for ${petName}!`);
    }

    this.income += owner[petName].procedures.length * 500;
    owner[petName].procedures = [];
    this.workLoad--;
    return `Goodbye ${petName}. Stay safe!`;
  }

  toString() {
    let row = [
      `${this.clinicName} is ${
        (this.workLoad / this.capacity) * 100
      }% busy today!`,
      `Total profit: ${this.income.toFixed(2)}$`,
    ];

    this.clients
      .sort((a, b) => a.oName.localeCompare(b.oName))
      .forEach((o) => {
        row.push(`${o.oName} with:`);
        Object.keys(o)
          .filter((x) => x != "oName")
          .sort((a, b) => a.localeCompare(b))
          .forEach((pN) =>
            row.push(
              `---${pN} - a ${o[pN].kind} that needs: ${o[pN].procedures.join(
                ", "
              )}`
            )
          );
      });

    return row.join("\n");
  }
}

//Zero test 2 - same + toString
let clinic = new VeterinaryClinic("SoftCare", 10);
clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"]);
clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"]);
clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]);
clinic.onLeaving("Jim Jones", "Tiny");

let string = `SoftCare is 20% busy today!
Total profit: 500.00$
Anna Morgan with:
---Max - a dog that needs: SK456, DFG45, KS456
Jim Jones with:
---Tiny - a cat that needs: 
---Tom - a cat that needs: A154B, 2C32B, 12CDB`;
console.log(clinic.toString());
