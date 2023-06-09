"use strict";


// первый пример в домашнем задании
let a = '100px';
let b = '323px';
let result = parseInt(a) + parseInt(b);
console.log(result);

// второй пример в домашнем задании
console.log(Math.max(10, -45, 102, 36, 12, 0, -1));


//второй пример, но решен отсебятиной с использованеим переменных
let a1 = '10';
let a2 = '-45';
let a3 = '102';
let a4 = '36';
let a5 = '12';
let a6 = '0';
let a7 = '-1';
console.log(Math.max(a1, a2, a3, a4, a5, a6, a7,));

//третий пример
let c=123.3399;// Округлить до 123
//Решение
console.log(Math.round(c));

let d = 0.111;// Округлить до 1
console.log(Math.ceil(d));

let e = 45.333333;// Округлить до 45.3
console.log(e.toFixed(1));

let f = 3;// Возвести в степень 5 (должно быть 243)
console.log(f ** 5);

let g = 400000000000000;// Записать в сокращенномвиде
console.log(4e14);

let h='1'==1;// Поправить условие, чтобы результат был true (значения изменять нельзя, только оператор)
console.log(h);

//дополнительное задание
console.log(0.1+0.2===0.3);// Вернёт false, почему?


// в JavaScript, Двоичные числа с плавающей запятой 0.1 и 0.2 не очень точны.
// Результат их сложения не совсем равен 0.3,
// а более близкое число 0.30000000000000004,
// поэтому результат определения условия равенfalse

//функция исправления данной проблемы
function numbersequal(a11,b22){ return Math.abs(a11-b22)<Number.EPSILON;
} 
var a11 = 0.1 + 0.2, b22 = 0.3;
console.log(numbersequal(a11,b22));