// Задание 7.3 (2)
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

let list = "car";

let gate = {
    car : "audi",
    bike : "ducati",
    bicycle : "aist",
}
 
function check(string,obj){
  return (obj.hasOwnProperty(list)); 
}


console.log(check(list,gate));