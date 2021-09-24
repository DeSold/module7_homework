// Задание 7.5 (5)
// Переписать консольное приложение из предыдущего юнита на классы.

class Device { 
    constructor(model,brand,power) {
        this.model= model;
        this.brand = brand;  
        this.power = power;
    }
          deviceOn () {
            console.log(`${this.brand} ${this.model} is turn ON and work on ${this.power} Volt power`);
          }
          deviceOff () {
            console.log(`${this.brand} ${this.model} is turn OFF and work on 0 Volt power`);
          }
        }
        
        class TV extends Device {
    constructor(model, brand, power, colour, size, price) {
    super (model,brand,power);
          this.model= model;
          this.brand = brand;
          this.power = power;
          this.colour = colour;
          this.size = size;
          this.price = price;
        }
          parameters ( ) {
            console.log(`TV ${this.brand} ${this.model}, power -  ${this.power} V, colour - ${this.colour}, size - ${this.size}, price - ${this.price}$`);
          }
        }
        class NoteBook extends Device {
             constructor(model,brand,power,price,colour) { 
            super(model,brand,power);
          this.model= model;
          this.power = power;
          this.brand = brand;
          this.price = price;
          this.colour = colour;
    }
          parameters ( ) {
         console.log(`Лампа ${this.brand} ${this.model}, pover - ${this.power} V, price - ${this.price} $, colour - ${this.colour }`); 
         }
        }
    
        let device1 = new TV ('SmartQ','Samsung', 110, 'black','120x90', 1000);
        let device2 = new NoteBook ('A50','HP', 70, 700 , 'Grey');
    
        device1.parameters (); 
        device1.deviceOn(); 
        device1.deviceOff();
        device2.parameters (); 
        device2.deviceOn(); 
        device2.deviceOff();