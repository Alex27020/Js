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

//console.log('Имя человека: ' + name1 + ', а возраст: ' + age + ' лет' )
//alert('Имя человека: ' + name1 + ' ' + surname + ', а возраст: ' + age + ' лет' )

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
const myAge = calculateAge(2008)
console.log(myAge)
