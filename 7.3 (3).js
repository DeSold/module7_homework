// Задание 7.3 (3)
// Написать функцию, которая создает пустой объект, но без прототипа.

function f(){
    const emptyObj = Object.create(null);
    console.log(emptyObj);
}

f();