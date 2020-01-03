//function
function squere(n) {
    let number = n
    let squereValue = number * number
    return squereValue;
}
console.log(squere(10))

console.log('anonimus function')

//anonimus function
const squereAnonimusFunction = function (n) {
    let number = n
    let squereValue = number * number
    return squereValue;
}
console.log(squereAnonimusFunction(10))

const squere2 = function (n) {
    return n * n
}
console.log(squere2(100))

console.log('Arrow function')

//Arro function
const squere3 = (n) => {
    return n * n
}
console.log(squere3(100))

//Arro function
const sumNumbers = (n) => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum = sum + i
    }
    return sum
}
console.log(sumNumbers(10));

// const fullName = (firstName, lastName) => {
//     let space = ' '
//     let myName = firstName + space + lastName
//     return myName;
// }

// explicit return 
console.log('.........explicit return ..........')

const fullName2 = (firstName, lastName) => firstName + ' ' + lastName
console.log(fullName2('Atik', 'Rahman'))


// explicit return 
console.log('explicit return ')
const addToNum = (m, n) => m + n
console.log(addToNum(6, 7))

// explicit return 
console.log('.........(sum of all numbers) ..........')

// const sumNumbers = (n) => {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i
//     }
//     return sum
// }
// console.log(sumNumbers(10));

console.log('......... (sum numbers in arry) ..........')

const sumNumbersInArry = (n) => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum = sum + n
    }
    return sum
}
console.log(sumNumbersInArry([10, 39, 20]));

console.log('======')
// const reviersArry = (arr) => {
//     for (let i = 0; i <= arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// return
// }
// console.log(reviersArry([1, 2, 3]))

//Math.PI 

const PI = Math.PI
console.log(PI)

const arryOfSevenNumbers = (arr) => {
    const num = [] // store the arry
    for (let i = 0; i < 10; i++) {
        let ranNum = Math.floor(Math.random() * 10)
        num.push(ranNum)
    }
    return num
}

console.log(arryOfSevenNumbers(2))

console.log('......... (is Even?) ..........')

const isEven = (n) => {
    if (n % 2 == 0) {
        return true
    }
    return false
}
console.log(isEven(7))
console.log(isEven(10))