// Задание 1

// let str = 'Преобразуйте строку js в верхний регистр JS.'.toUpperCase();
// console.log(str);

// Задание 2

// const searchStart = (arr, str) => {
//     str = str.toLowerCase();
//     let newArr = arr.filter(el => el.startWith(str));

//     for (el of arr) {

//         el = el.toLowerCase();

//         if (el.startsWith(str)) {
//             newArr.push(el);
//         } else continue
//     }

//     return newArr;
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');


// Второй вариант

// const searchStart = (arr, str) => {
//     str = str.toLowerCase();
//     let newArr = arr.filter(el => el.toLowerCase().startsWith(str));
//     return newArr;
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


// Задание 3

// const getNumber = (num) => {
//     num = prompt('Что там у тебя за число')
//     let numFloor = Math.floor(num);
//     let numCeil = Math.ceil(num);
//     let numRound = Math.round(num);
//     return console.log(`Вот наименьшее целое ${numFloor}, вот наибольшее целое ${numCeil}, и ближайшее целове число ${numRound}`);
// }

// getNumber();
// //32.58884

// Задание 4

// const arrNum = [52, 53, 49, 77, 21, 32];
// let maxNum = Math.max(...arrNum);
// let minNum = Math.min(...arrNum);

// console.log(`Вот наименьшее ${minNum}, вот наибольшее ${maxNum}`);

// Задание 5

// const numbersRandom = () => {
//     return console.log(Math.round(Math.random() * 9) + 1);
// };

// numbersRandom();


// Задание 6

// const getRandomArrNumbers = (num) => {
//     let iteration = Math.floor(num / 2);
//     let arrNumbers = [];

//     for (let i = 0; i < iteration; i++) {
//         arrNumbers.push(Math.round(Math.random() * num));
//     }
//     return console.log(arrNumbers);
// }

// getRandomArrNumbers(7);
// getRandomArrNumbers(12);


// Задание 7

// const numbersRandom = (numFirst, numSecond) => {
//     return Math.floor(Math.random() * (numSecond - numFirst + 1) + numFirst);
// };

// const getNumbers = () => {
//     let minNumberOfUser = +prompt('Введите начало диапазона');
//     let maxNumberOfUser = +prompt('Введите конец диапазона');

//     if (isNaN(minNumberOfUser) || isNaN(maxNumberOfUser)) {
//         console.log('Что-то пошло не так, возможно вы ввели не число');
//     } else return numbersRandom(minNumberOfUser, maxNumberOfUser);
// }

// console.log(getNumbers());

// const numbersRandom = (numFirst, numSecond) => {
//     return Math.floor(Math.random() * (numSecond - numFirst + 1) + numFirst);
// };

// const getNumbers = () => {
//     let regExp = /^[\d]+$/;
//     let minNumberOfUser = prompt('Введите начало диапазона');
//     let maxNumberOfUser = prompt('Введите конец диапазона');
    
//     if (regExp.test(minNumberOfUser) && regExp.test(maxNumberOfUser)) {
//         return numbersRandom(minNumberOfUser, maxNumberOfUser);
//     } else console.log('Что-то пошло не так, возможно вы ввели не число');
// }

// console.log(getNumbers());





// Задание 8

// let myDate = new Date();
// console.log(myDate);


// Задание 9

// Мой первый (стремный) вариант, который не понравился, потому что я не читаю подсказки  

// let currentDate = new Date();
// let days73 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = +currentDate + days73;
// let daysAgo73 = new Date(searchDate); 
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(daysAgo73.toLocaleDateString('ru-RU', options));

// Второй вариант:

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(currentDate.toLocaleDateString('ru-RU', options));


// Задание 10


// const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const getUsersDate = (date) => {
//     let hour = date.getHours(); 
//     let minute = date.getMinutes(); 
//     let second = date.getSeconds(); 

//     if (hour < 10) { 
//         hour = "0" + hour; 
//     };

//     if (minute < 10) { 
//         minute = "0" + minute;
//     };

//     if (second < 10) { 
//         second = "0" + second;
//     };

//     return console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}. Время: ${hour}:${minute}:${second}.`);
// }

// let dateUser = new Date();
// getUsersDate(dateUser);


// Игра Запомни слова

const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const gameWords = () => {
    let arrSorted = shuffle(arr);
    alert(arrSorted);
    console.log(arrSorted);

    let firstElement = prompt('Помнишь первое слово?');
    let lastElement = prompt('Помнишь последнее слово?');

    if (firstElement.toLowerCase() === arrSorted[0].toLowerCase() && lastElement.toLowerCase() === arrSorted[6].toLowerCase()) {
        alert('Молодец, ты угадал сразу два слова');
    } else if (firstElement.toLowerCase() === arrSorted[0].toLowerCase() || lastElement.toLowerCase() === arrSorted[6].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Ничего не угадали');
    }
}


