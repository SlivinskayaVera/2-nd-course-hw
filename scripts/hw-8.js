// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else return 0;
}))


// Задание 2

function isPositive(num) {
    if (num >= 0) {
        return true;
    }
}

function isMale(obj) {
    if (obj.gender === 'male') {
        return true;
    }
}

function filter(arr, ruleFunction) {
    const newArr = [];

    for (let i of arr) {
        if (ruleFunction(i) !== undefined) {
            newArr.push(i)
        }
    }
    return newArr
}

console.log(filter([3, -4, 1, 9], isPositive));
// Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



// Задание 3

const timer = (deadline) => {
    const interval = setInterval(() => {
        let nowDatetime = new Date();
        console.log(nowDatetime);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};

timer(30);


// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


// Задание 5

// У меня два варианта, один хороший, другой правильный 

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(sayHi.bind(null, 'Глеб'))
delayForSecond((cb) => { return sayHi('Глеб') })
// Лиза подсказала
delayForSecond(() => sayHi('Глеб') )



// Правильный порядок:
// Прошла одна секунда
// Привет, Глеб!
