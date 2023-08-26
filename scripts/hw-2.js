// Задание 1
let a = 10;
alert(a);
a = prompt('напиши 20');
alert(a);

// Задание 2
let releaseIphone = 2007;
alert(releaseIphone);

// Задание 3
let genius = 'Brendan Eich';
alert(genius);

// Задание 4
let numberOne = 10;
let numberTwo = 2;
alert(numberOne + numberTwo);
alert(numberOne - numberTwo);
alert(numberOne * numberTwo);
alert(numberOne / numberTwo);

// Задание 5
let result = 2**5;
alert(result);

// Задание 6
a = 9;
let b = 2;
alert(a % b);


// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
 let user = {
    name: 'Vasya',
    age: 7,
    isAdmin: false
};

// Задание 9.1
user['city of residence'] = 'Ekb';


// Задание 9.2
user.age = 8;

// Задание 9.3
delete user['city of residence'];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let userName = prompt(`What's your name?`);
alert(`Привет, ${userName}!`);