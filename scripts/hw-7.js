// Задание 1

// let str = 'Преобразуйте строку js в верхний регистр JS.'.toUpperCase();
// console.log(str);

// Задание 2

// const searchStart = (arr, str) => {
//     str = str.toLowerCase();
//     let newArr = [];

//     for (el of arr) {

//         el = el.toLowerCase();

//         if (el.startsWith(str)) {
//             newArr.push(el);
//         } else continue
//     }

//     return console.log(newArr);
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');


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
//     return console.log(Math.round(Math.random() * (numSecond - numFirst) + numFirst));
// };

// const getNumbers = () => {
//     let minNumberOfUser = prompt('Введите начало диапазона');
//     minNumberOfUser = Number(minNumberOfUser);
//     let maxNumberOfUser = prompt('Введите конец диапазона');
//     maxNumberOfUser = Number(maxNumberOfUser);

//     if (isNaN(minNumberOfUser) || isNaN(maxNumberOfUser)) {
//         console.log('Что-то пошло не так, возможно вы ввели не число');
//     } else numbersRandom(minNumberOfUser, maxNumberOfUser);
// }

// getNumbers();



// Задание 8

// let myDate = new Date;
// console.log(myDate);


// Задание 9

// let currentDate = new Date();
// let days73 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = +currentDate + days73;
// let daysAgo73 = new Date(searchDate); 
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(daysAgo73.toLocaleDateString('ru-RU', options));


// Задание 10


// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const getUsersDate = (date) => {
//     return console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}. Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`);
// }

// let dateUser = new Date;
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

    let firstElement = prompt('Чему равнялся первый элемент массива?');
    let lastElement = prompt('Чему равнялся последний элемент массива?');

    if (firstElement === arrSorted[0] && lastElement === arrSorted[6]) {
        alert('Молодец, ты укадал сразу два слова');
    } else if (firstElement !== arrSorted[0] && lastElement === arrSorted[6]) {
        alert('Вы были близки к победе!')
    } else if (firstElement === arrSorted[0] && lastElement !== arrSorted[6]) {
        alert('Вы были близки к победе!')
    } else {
        alert('Ничего не угадали');
    }
}


