// Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет!');
};


// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
};

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
};

// Задание 4
let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
};

for (let i in obj) {
    alert(`${i} — зарплата ${obj[i]} долларов.`)
};

// Задание 5

let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
};

console.log(`Цикл завершен, пройдено ${num} итераций, остаток от делений ${n}`);


// Задание 6

let firstFriday = 3;
for (let i = 0; i <= 31; i++) {
    if (i === firstFriday) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    } else if (i % 7 === firstFriday) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
    }
};

// Вариант от Александра Ахметова
// for (let friday = 5; friday <= 31; friday +=7 ) {
//     console.log(`Сегодня пятница ${friday}-е число. Необходимо подготовить отчет`);
// } 


