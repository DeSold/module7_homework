// Задание 7.4 (4)
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Device (model,brand, power) {
    this.model= model;
    this.brand = brand;  
    this.power = power;
    this.deviceOn = function() {
        console.log(`${this.brand} ${this.model} is turn ON and work on ${this.power} Volt power`);
      }
    this.deviceOff = function() {
        console.log(`${this.brand} ${this.model} is turn OFF and work on 0 Volt power`);
      }
    }
    
function TV(model, brand, power, colour, size, price) { 
    this.model = model;
    this.brand = brand;
    this.power = power;
    this.colour = colour;
    this.size = size;
    this.price = price;
    
    this.parameters = function () {
        console.log(`TV ${this.brand} ${this.model}, power - ${this.power} V, colour - ${this.colour}, size - ${this.size}, price - ${this.price}$`);
      }
    }
function Notebook(model, brand, power, colour, price) { 
    this.model = model;
    this.brand = brand;
    this.power = power;
    this.colour = colour;
    this.price = price;
      
    this.parameters = function () {
        console.log(`NoteBook ${this.brand} ${this.model}, power - ${this.power} V, colour - ${this.colour}, price - ${this.price}$`); 
     }
    }

    TV.prototype = new Device(); 
    Notebook.prototype = new Device();


    let device1 = new TV ('SmartQ','Samsung', 110, 'black','120x90', 1000);
    let device2 = new Notebook ('A50','HP', 70, 'Grey', '700');

    device1.parameters (); 
    device1.deviceOn(); 
    device1.deviceOff();
    device2.parameters (); 
    device2.deviceOn(); 
    device2.deviceOff();