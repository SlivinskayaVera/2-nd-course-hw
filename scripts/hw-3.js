// Задание 1

let password = 'пароль';
let userInput = prompt('Введите пароль');
(password === userInput) ? alert("Пароль введен верно") : alert("Пароль введен неправильно");


// Задание 2
// Проверьте работу скрипта при значении переменной c, равной 0, 10, −3, 2.
let s = 10;
(s > 0 && s < 10) ? alert('Верно') : alert('Неверно');


// Задание 3

let d = -2;
let e = 200;
(d > 100 || e > 100) ? alert('Верно') : alert('Неверно');


// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5

let monthNumber = Number(prompt('Пользователь, введи номер месяца, и помни, что в году только 12 месяцев'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень')
        break;
    default:
        alert('Пользователь, да вы фантазер, попробуем еще раз')
        break;
}


// Задание 7

let num = prompt('Пожалуйста, введите любое число');

if (isNaN(num)) {
    alert('Вы ввели не число')
} else { checkNum = num % 2;
    (checkNum === 0) ? alert('Число четное') : alert('Число нечетное');
}


// Задание 8
// Несовсем поняла задание, пока такой вариант

let clientOS = prompt('Какая у вас операционная система на мобильном устройстве? Ответьте iOS или Android');
clientOS = clientOS.toLocaleLowerCase();
if (clientOS === 'ios') {
    clientOS = 0;
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 'android') {
    clientOS = 1;
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('К сожалению, мы не смогли определить вашу операционную систему');
}


// Задание 9

let clientDeviceYear = 2015;
let userDeviceYear = prompt('В каком году был выпущено ваше мобильное устройство? Укажите только год в формате ГГГГ');
if (clientOS === 0) {
    if (userDeviceYear >= clientDeviceYear) {
        alert('Установите версию приложения для iOS по ссылке');
    } else {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    }
} else {
    if (userDeviceYear >= clientDeviceYear) {
        alert('Установите версию приложения для Android по ссылке');
    } else {
        alert('Установите облегченную версию приложения для Android по ссылке');
    }
}
