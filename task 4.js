function ElectricalDevices(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}
ElectricalDevices.prototype.plug = function() {
  console.log(`${this.name} is plugged.`);
  this.isPlugged = true;
}
ElectricalDevices.prototype.unplug = function() {
  console.log(`${this.name} is unplugged.`);
  this.isPlugged = false;
}
ElectricalDevices.prototype.activeCurrent = function() {
  if (this.isPlugged == true) {   
     return this.power;
  } else {  
     return 0;
   }
};

function Lamp(name, brand, brightness, power) {
  this.name = name;
  this.brand = brand;
  this.brightness = brightness;
  this.power = power;
  this.isPlugged = false;
};

function Computer(name, brand, type, power) {
  this.name = name;
  this.brand = brand;
  this.type = type;
  this.power = power;
  this.isPlugged = false;
  this.isPowerSaving = false;
};

Lamp.prototype = new ElectricalDevices();
Computer.prototype = new ElectricalDevices();

Computer.prototype.powerSavingOn = function() {
  if (this.isPlugged == true) {
     this.isPowerSaving = true;
     console.log(`${this.name} is power saving on.`);    
  } 
}
Computer.prototype.powerSavingOff = function() {
  if (this.isPlugged == true) {
     this.isPowerSaving = false;
     console.log(`${this.name} is power saving off.`);   
  } 
}
Computer.prototype.getPowerSaving = function() {
    if (this.isPowerSaving == true) {
      return this.power * 0.2;
    } else {
      return 0;
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