class ElectricalDevices {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  plug() {
    console.log(`${this.name} is plugged.`);
    this.isPlugged = true;
  }
  unplug() {
    console.log(`${this.name} is unplugged.`);
    this.isPlugged = false;
  }
  activeCurrent() {
    if (this.isPlugged == true) {   
       return this.power;
    } else {  
       return 0;
     }
  }
};

class Lamp extends ElectricalDevices {
  constructor(name, brand, brightness, power) {
    super(name, power);
    this.brand = brand;
    this.brightness = brightness;
    this.isPlugged = false;
  }
};

class Computer extends ElectricalDevices {
  constructor(name, brand, type, power) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
    this.isPowerSaving = false;
  }
  powerSavingOn() {
    if (this.isPlugged == true) {
       this.isPowerSaving = true;
       console.log(`${this.name} is power saving on.`);    
    } 
  }
  powerSavingOff() {
    if (this.isPlugged == true) {
       this.isPowerSaving = false;
       console.log(`${this.name} is power saving off.`);   
    } 
  }
  getPowerSaving() {
    if (this.isPowerSaving == true) {
        return this.power * 0.2;
      } else {
        return 0;
      }
  }
};

const homeLamp = new Lamp('Classic lamp', 'Camelion', 'Cold', 10);
const homeComp = new Computer('Working computer', 'Apple', 'Laptop', 100);

homeLamp.plug();
homeComp.plug();
homeComp.powerSavingOn();
console.log(homeLamp)
console.log(homeComp)
console.log('Total voltage is: ' + (homeLamp.activeCurrent() + homeComp.activeCurrent() - homeComp.getPowerSaving()) + 'V.')