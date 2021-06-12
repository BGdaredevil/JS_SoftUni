function createComputerHierarchy() {
  class Keyboard {
    constructor(man, tim) {
      this.manufacturer = man;
      this.responseTime = tim;
    }
  }
  class Monitor {
    constructor(man, w, h) {
      this.manufacturer = man;
      this.width = w;
      this.height = h;
    }
  }
  class Battery {
    constructor(man, life) {
      this.manufacturer = man;
      this.expectedLife = life;
    }
  }
  class Computer {
    constructor(man, speed, ram, hdd) {
      if (new.target === Computer) {
        throw new TypeError("Acess Denied");
      }
      this.manufacturer = man;
      this.processorSpeed = speed;
      this.ram = ram;
      this.hardDiskSpace = hdd;
    }
  }
  class Laptop extends Computer {
    constructor(man, speed, ram, hdd, w, col, bat) {
      super(man, speed, ram, hdd);
      this.weight = w;
      this.color = col;
      this.battery = bat;
    }
    set battery(bat) {
      if (!(bat instanceof Battery)) {
        throw new TypeError("Battery is not supported");
      }
      this._battery = bat;
    }
    get battery() {
      return this._battery;
    }
  }
  class Desktop extends Computer {
    constructor(man, speed, ram, hdd, keyB, display) {
      super(man, speed, ram, hdd);
      this.keyboard = keyB;
      this.monitor = display;
    }
    set keyboard(keyB) {
      if (!(keyB instanceof Keyboard)) {
        throw new TypeError("Keyboard is not supported");
      }
      this._keyboard = keyB;
    }
    get keyboard() {
      return this._keyboard;
    }
    set monitor(display) {
      if (!(display instanceof Monitor)) {
        throw new TypeError("Monitor is not supported");
      }
      this._monitor = display;
    }
    get monitor() {
      return this._monitor;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}
