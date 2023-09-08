// Задание 1

const getNumber = (a, b) => {
    let result = a > b ? a : b;
    return result;
}

// Задание 2

const checkNumber = (a) => {
    let result = a % 2 === 0 ? 'Число четное' : 'Число нечетное';
    return result;
}


// Задание 3

const outputSquareOfNumber = (a) => {
    console.log(a * a);
};

const getSquareOfNumber = (a) => {
    return a * a;
}


// Задание 4

const greet = () => {
    let age = prompt('Сколько вам лет?');
    age = Number(age);

    if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}


// Задание 5

const multiplyNumbers = () => {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        alert('Одно или оба значения не являются числом')
    } else {
        let result = a * b;
        return result
    }
}


// Задание 6

const getCubeNumber = () => {
    let a = prompt('Введите число');
    a = Number(a);

    if (isNaN(a)) {
        alert('Переданный параметр не является числом')
    } else {
        let result = a * a * a;
        return `${a} в кубе равняется ${result}`
    }
}


// Задание 7

function getCircleArea() {
    return 2 * Math.PI * this.radius;
}

function getCirclePerimeter() {
    return Math.PI * this.radius ** 2;
}

const circle1 = {
    radius: 4,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 7,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Задание 8

const month = () => {
    let monthNumber = Number(prompt('Пользователь, введи номер месяца, и помни, что в году только 12 месяцев'));

    if (monthNumber <= 2 || monthNumber === 12) {
        console.log('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('Весна')
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('Лето')
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log('Осень')
    } else {
        console.log('Что-то пошло не так, попробуйте ещё раз')
    }
}