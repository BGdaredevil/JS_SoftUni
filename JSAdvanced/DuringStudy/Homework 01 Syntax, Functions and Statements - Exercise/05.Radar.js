function solve(...input) {
  let [speed, location] = input;
  speed = Number(speed);
  let limits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  if (speed <= limits[location]) {
    return `Driving ${speed} km/h in a ${limits[location]} zone`;
  } else {
    let diff = speed - limits[location];
    if (diff > 40) {
      return `The speed is ${diff} km/h faster than the allowed speed of ${limits[location]} - reckless driving`;
    } else if (diff > 20) {
      return `The speed is ${diff} km/h faster than the allowed speed of ${limits[location]} - excessive speeding`;
    } else {
      return `The speed is ${diff} km/h faster than the allowed speed of ${limits[location]} - speeding`;
    }
  }
}
