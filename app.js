// console.log('кот'.codePointAt(2)) //1090
// console.log('код'.codePointAt(2)) //1076
console.log('кот' > 'код') //true

console.log('2' + 2 * '2') // 24
// 2*'2' -> число * число
// '2'+'4' -> строка + строка

console.log(null == undefined) //true

console.log(null === undefined) //false
// разные типы

console.log(null == 0) //false
// true - (null == undefined), в остальных случая false

console.log(2 > '3') //false
// > - все приводит к числам

console.log(null - false + true) // 1
// null -> 0, false -> 0, true -> 1

console.log(1 / "1") // 1
// строка приводится к числу

console.log('2' * '3') //6
// строка приводится к числу

let str = 4 + 5 + "Л"
console.log(typeof str) //9Л
/* конкатенация строк */

console.log('1' + 4 + 5) //145
// при сложении все приводится к строке

console.log('4' - 2) //2
// при вычитании все приводится к числу

let str1 = '4' - '4x'
console.log(typeof str1) //NaN
// не корректное числовое значение

console.log(null == false) //false
// хз почему

console.log('-4' / 0 + 1) //Infinity
// бесконечность

console.log(null + 1) //1
// null -> число

console.log(undefined + null) //NaN
// не корректное числовое значение

