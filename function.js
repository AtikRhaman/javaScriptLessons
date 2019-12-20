//Function
//Function Declaration, Expression function, anonymous function, arrow function
//Function Declaration

//Function that addTwoNumbers
// function addTwoNumbers() {
//     let numOne = 10;
//     let numTwo = 20;
//     let sum = numOne + numTwo;
//     console.log(sum)
// }
// addTwoNumbers()

//functionwith parameter (area of cercle)
function areaOfCercle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCercle(30))

//function with two parameters
function sumTwoNumbers(m, n) {
    let sum = m + n
    return sum
}
console.log(sumTwoNumbers(10, 50))

function printFullName(a, b) {
    let fullName = `${a} ${b}`
    return fullName
}
console.log(printFullName('Atik', 'Rahman'))
console.log(printFullName('Usun', 'Rahman'))

// this function takes array as a parameter and sum-up the numbers in the array
function sumArrayValues(arrayValues) {
    let sum = 0;
    for (i = 0; i < arrayValues.length; i++) {
        sum = sum + arrayValues[i];
    }
    return sum;
}

const numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumArrayValues(numbers))

// Function Expression
// Function expression is declared in a variables
function squre(n) {
    return n * n;
}

console.log(squre(2))
let squreFunction = function (a, b) {
    return a * b;
}
console.log(squreFunction(2, 4))

//Arrow Function
let squere = (n) => {
    let squereFunction = n * n
    return squereFunction
}
console.log(squere(10, 10))

//functionExcercise
