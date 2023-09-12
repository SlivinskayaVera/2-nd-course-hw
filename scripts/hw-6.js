// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (el of arr) {
    if (el != 10) {
        console.log(el);
    } else if (el === 10) {
        console.log(el);
        break
    }
}


// Задание 2

const arr = [1, 5, 4, 10, 0, 3];
let indexOfNumber = arr.indexOf(4);
console.log(indexOfNumber);


// Задание 3

const arr = [1, 3, 5, 10, 20];
let arrJoined = arr.join(' ');
console.log(arrJoined);


// Задание 4

const arr = [];
for (let i = 0; i != 3; i++) {
    arr.push([1, 1, 1]);
};
console.log(arr);


// Задание 5

const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);


// Задание 6

let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr.pop());
console.log(arr);


// Задание 7

const arr = [9, 8, 7, 6, 5];
let userAnswer = prompt('Угадай число от 5 до 9');
userAnswer = Number(userAnswer);
arr.includes(userAnswer) ? alert('Молодец, угадал') : alert('Молодец, но не угадал');


// Задание 8

let string = 'abcdef';
let arr = string.split('').reverse();
string = arr.join('')
console.log(string);


// Задание 9

let arr = [[1, 2, 3,], [4, 5, 6]];
// const result = [...arr[0], ...arr[1]];
const result = arr[0].concat(arr[1]);
console.log(result);



function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}


// Задание 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let el of arr) {
    let sumNumbers = el + arr[el++];
    if (isNaN(sumNumbers)) {
        break
    }
    console.log(sumNumbers)
}


// Задание 11

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareOfNumbers = (arr) => {
    let result = arr.map(i => (i * i));
    return result;
};

console.log(squareOfNumbers(numbers));

// Задание 12

const arrOfStrings = ['слово', '', 'слог', 'длинное предложение', 'буква'];

const getLengthWords = (arr) => {
    let result = arr.map(i => (i.length));
    return result;
}

console.log(getLengthWords(arrOfStrings));
// [5, 0, 4, 19, 5]

// Задание 13

const filterPositive = (arr) => {
    let result = arr.filter(i => i < 0);
    return result;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]

// Задание 14

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 11));
};

let result = arr.filter(i => (i % 2 == 0 && i > 0));

console.log(arr);
console.log(result)


// Задание 15

let arr = [];

for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 11));
};

let result = arr.reduce((x, y) => x + y) / arr.length;

console.log(arr);
console.log(result)

