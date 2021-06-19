class Parking {
  constructor(cap) {
    this.capacity = cap;
    this.vehicles = [];
  }

  addCar(model, plate) {
    // if (typeof model != "string" || typeof plate != "string") {
    //   throw new Error("no strings attached");
    // }

    // let car = this.vehicles.filter((v) => v.carNumber === plate)[0];
    // if (car !== undefined) {
    //   throw new Error("Same number plate!");
    // }

    if (this.capacity > 0) {
      this.capacity -= 1;
      this.vehicles.push({ carModel: model, carNumber: plate, payed: false });
      return `The ${model}, with a registration number ${plate}, parked.`;
    } else {
      throw new Error(`Not enough parking space.`);
    }
  }

  removeCar(plate) {
    let car = this.vehicles.filter((v) => v.carNumber === plate)[0];
    if (car === undefined) {
      throw new Error("The car, you're looking for, is not found.");
    }
    if (!car.payed) {
      throw new Error(
        `${car.carNumber} needs to pay before leaving the parking lot.`
      );
    }
    this.vehicles = this.vehicles.filter((v) => v.carNumber != plate);
    this.capacity += 1;
    return `${car.carNumber} left the parking lot.`;
  }

  pay(plate) {
    let car = this.vehicles.filter((v) => v.carNumber === plate)[0];
    if (car === undefined) {
      throw new Error(`${plate} is not in the parking lot.`);
    }
    if (car.payed) {
      throw new Error(
        `${car.carNumber}'s driver has already payed his ticket.`
      );
    }
    car.payed = true;
    return `${car.carNumber}'s driver successfully payed for his stay.`;
  }

  getStatistics(plate) {
    let row = [];
    if (plate === undefined) {
      row.push(`The Parking Lot has ${this.capacity} empty spots left.`);
      if (this.vehicles.length > 0) {
        this.vehicles
          .sort((a, b) => a.carModel.localeCompare(b.carModel))
          .forEach((v) =>
            row.push(
              `${v.carModel} == ${v.carNumber} - ${
                v.payed ? "Has payed" : "Not payed"
              }`
            )
          );
      }
    } else {
      let car = this.vehicles.filter((v) => v.carNumber === plate)[0];
      row.push(
        `${car.carModel} == ${car.carNumber} - ${
          car.payed ? "Has payed" : "Not payed"
        }`
      );
    }
    return row.join("\n");
  }
}
const parking = new Parking(3);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Audi", "CA0000CA"));
console.log(parking.addCar("BMV", "CB1111CA"));
console.log(parking.getStatistics());
console.log(parking.pay("Ta3691CA"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("CA0000CA"));
console.log(parking.removeCar("CA0000CA"));
console.log(parking.getStatistics());
console.log(parking.pay("CB1111CA"));
console.log(parking.removeCar("CB1111CA"));
console.log(parking.getStatistics());
