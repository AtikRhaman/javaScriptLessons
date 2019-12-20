//Data Type
//String, Number, Boolean, Null, undefine, symbol
// Numbers : 10, 3,4, -2, -5, -7



console.log('Hello world')
console.log('10')

console.log(true)
console.log(false)

console.log(null)
console.log(undefined)

console.log(3)
console.log(3.1)
console.log(9.1)

// variable

//var, let, const

let firstName = 'Atikur'
let lastName = 'Rahman'
const space = ' '
let fullName = firstName + space + lastName


console.log(firstName)
console.log(lastName)
console.log(fullName)


//numbers

let numOne = 3
let numTwo = 2

// +, -,*, / % **
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let dev = numOne / numTwo
let remainder = numOne % numTwo
let exp = numOne ** numTwo

console.log('The sum:', sum)
console.log('The diff:', diff)
console.log('The sum of', numOne + ' the sum of', numTwo + 'is', sum)

console.log('The sum of', numOne + ' the sum of', numTwo + 'is', sum)

//Backtics
console.log(`${numOne} + ${numTwo} = ${sum}`)
console.log(`${numOne} - ${numTwo} = ${diff}`)
console.log(`${numOne} * ${numTwo} = ${mult}`)
console.log(`${numOne} / ${numTwo} = ${dev}`)
console.log(`${numOne} % ${numTwo} = ${remainder}`)
console.log(`${numOne} ** ${numTwo} = ${exp}`)

//Operators: Comparision operator: > < >= <= == === != !==
// == equavalent, === exactly equavalent
console.log(3 == '3') //True
console.log(3 === '3') //False
console.log(3 !== '3') //True
console.log(3 != '3') //True

//Aritmatic operator

//logical Operator && ||, !

// && Both are true
// || 

console.log(3 > 2 && 3 < 4)
console.log(3 > 2 && 3 > 4)
console.log(3 < 2 && 3 > 4)

console.log(3 < 2 || 3 > 4)
console.log(3 < 2 || 3 < 4)
console.log(3 < 2 || 3 < 4)
console.log(3 != 3 * 1)



// conditions
let weather = 'sunny'

// if (weather === 'rainy') {
//     console.log('you should take an umbrella')
// } else if (weather == 'sunny') {
//     console.log('Just go out freely')
// } else if (weather == 'couldy') {
//     console.log('it may rain or not')
// } else {
//     console.log('No one know about wather')
// }

switch (weather) {
    case 'rainy':
        console.log('you should take an umbrella')
        break
    case 'cloudy':
        console.log('It may rain today')
        break
    case 'sunny':
        console.log('you can go outsight freely')
        break
    default:
        console.log('No one know about wather')
}

let x;
console.log(x);
let firstNameA = "Atik"
let lastNameA = 'Rahman'
let age = 29
let person = firstNameA + space + lastNameA + space + age
console.log(person);

let myAge = 29
let yourAge = 37
console.log('I am ', +space + myAge + space + 'years old')
console.log('You are', +space + yourAge + space + 'years old')