/* 1. Сктрока > Строка */
// console.log('кот'.codePointAt(2)) //1090
// console.log('код'.codePointAt(2)) //1076
console.log('кот' > 'код') //true

/* 2. Строка + Число * Строка */
console.log('2' + 2 * '2') // 24
// 2*'2' -> число * число
// '2'+'4' -> строка + строка

/* 3. null == undefined (не строгое)*/
console.log(null == undefined) //true

/* 4. null == undefined (строгое)*/
console.log(null === undefined) //false
// разные типы

/* 5. null == 0 (не строгое)*/
console.log(null == 0) //false
// true - (null == undefined), в остальных случая false

/* 6. число > строка */
console.log(2 > '3') //false
// > - все приводит к числам

/* 7. null - boolean + boolean */
console.log(null - false + true) // 1
// null -> 0, false -> 0, true -> 1

/* 8. число / строку */
console.log(1 / "1") // 1
// строка приводится к числу

/* 9. строка + строка */
console.log('2' * '3') //6
// строка приводится к числу

/* 10. число + число + строка(строка) */
let str = 4 + 5 + "Л"
console.log(typeof str) //9Л
/* конкатенация строк */

/* 11. строка + число + число */
console.log('1' + 4 + 5) //145
// при сложении все приводится к строке

/* 12. строка - число */
console.log('4' - 2) //2
// при вычитании все приводится к числу

/* 13. строка - строка(строка) */
let str1 = '4' - '4x'
console.log(typeof str1) //NaN
// не корректное числовое значение

/* 14 null == false */
console.log(null == false) //false
// хз почему

/* 15 строка / число + число */
console.log('-4' / 0 + 1) //Infinity
// бесконечность

/* 16 null + число */
console.log(null + 1) //1
// null -> число

console.log(undefined + null) //NaN
// не корректное числовое значение

