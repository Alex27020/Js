// 1_Переменные

//camelCase- пишиТак, а не пиши_так
// let age = 14// num
// const name1 = 'Alex'// string
// const surname = 'Lobach'// string
// const what = true// boolean

//console.log(age)
//console.log(what)

//Правильно:
// const $ = 'private'
// const _ = "some value"
// const witchNum5 = '5'

//Неправильно:
//const if ='number' //err
//const 5witchNum = '5'//err


// 2_Мутирование

// console.log('Имя человека: ' + name1 + ', а возраст: ' + age + ' лет' )
// alert('Имя человека: ' + name1 + ' ' + surname + ', а возраст: ' + age + ' лет' )

//const surname1 =prompt('Введите фамилию:')
//const name_1 =prompt('Введите имя:')
//alert('Вас зовут: ' + name_1 + ' ' + surname1)

//3_Операторы
//let currentYear = 2014
// const birthyear = 2008

// const age1 = currentYear - birthyear

// console.log(age1)
const a = 11
const b = 5
//console.log(a+b)
//console.log(a-b)
//console.log(b/a)
//console.log(a*b)

//console.log(currentYear)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(currentYear++)

let c = 32

//c = c - a
//c -= a
//c += a
//c *= a
//c /= a

console.log(c)
//4_Типы Данных
// const isProgrammer = true
// const Name = 'Lobach'
// const age = 14
// const what = false
// let x
// console.log(typeof Name)
// console.log(typeof age )
// console.log(typeof x)
// console.log(typeof what)
// console.log(typeof null)//object

//5_Приоритет операторов
// > < >= <=
// const fullAge = 14
// const birthYear = 2008
// const currentYear = 2022
// const isFullAge = (currentYear - birthYear) >= fullAge // 14 >= 14 => true
// console.log(isFullAge)

//6_Условные операторы
//const courseStatus = 'fail' //ready, fail, pending

// if (courseStatus === 'ready') {
//    console.log('Курс готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//    console.log('Курс в стадии разработки')
// } else {
//    console.log('Курс не получился(')
// }

//const isReady = true
// //Так как true булевое значение, то можно написать так:
// if (isReady) {
//    console.log('все готово!')
// } else {
//    console.log('все не готово(')
// }

//Тернарное выражение (Часто используется для простых конструкций);
//isReady ? console.log('Все готово!') : console.log('Все не готово!')

// == проверяет только значение 42, а === проверяет еще и тип данных, лучше писать ===, чтобы не запутаться
// const num1 = 42 //number
// const num2 = '42'//string
// console.log(num1 === num2)

//7_Булевая логика
//Cам посмотришь

//_8 Функции

function calculateAge(year) {
   return 2023 - year
}
// let myAge = calculateAge(2008)
// console.log(myAge)
// myAge = calculateAge(1000)
// console.log(myAge)
// console.log(calculateAge(2000))
// console.log(calculateAge(3000))

// function LogInfoAbout(name, year) {
//    const age = calculateAge(year)
//    console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age + ' лет!')
// }
// LogInfoAbout('Александр', 2008)//Не пишем console.log тк в самой функциии уже прописано
//Мой код

   const name_1 = prompt('Введите Имя')
   const birthYear = prompt('Введите год рождения')

   function information(name_2, age) {
   age = calculateAge(birthYear)
   if (age > 0){
   alert('Тебя зовут ' + name_2 + "!" + ' Поздравляю, ' + name_2 + ', тебе в этом году целых ' + age + '!!1!11!)))11!)0' + ' Йоу, ты уже такой большой, ' + name_2 + '!!')
   } else {
      alert('Слышь, ты, корректную дату рождения поставь, пожалуйста(')   
   }
}
information(name_1)

//_9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
//const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)
// console.log(cars.length)
// console.log(cars.length)//номер массива
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// console.log(cars[0])
// cars[cars.length] = 'Mazda'//добавляет в конец массива новое значение, млжно написать cars[cars.length]         
// console.log(cars)

//_10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд']

// for (let i = 0; i < cars.length; i++) {
//    const car = cars[i]
//    console.log(car)
// }

// for (let car of cars) {
//    console.log(car)
// }

//11_ Объекты
// const person = new Object()
// const person ={
//    firstname: 'Lobach',
//    lastName: 'Alex',
//    year: 2008,
//    languages: ['Ru', 'En', 'De'],
//    hasWife: false,
//    greet: function() {
//       console.log('greet fuckin cuming')
//    }
// }
// //console.log(person)//
// console.log(person.year)
// console.log(person['year'])//чтрочка!
// const key = 'languages'

// person.hasWhite = true
// person.hasWifeWhite = true
// person.greet(console.log(person[key]))










