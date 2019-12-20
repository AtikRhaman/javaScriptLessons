// Day 2
// condition


let isRaining = false;
let waither = 'rainy'

// if (isRaining === true) {
//     // this is scope of the condition
//     console.log("It is raining, take an Umbrella")
// } else {
//     console.log('this is shiny')
// }

if (waither === 'rainy') {
    // this is scope of the condition
    console.log("It is raining, take an Umbrella from ifelse")
} else if (waither === 'cloudy') {
    console.log('this is shiny from ifelse')
} else {
    console.log('there is no rain today from ifelse')
}

switch (waither) {
    case 'rainy':
        console.log('It is raining, take an Umbrella from swithch')
        break
    case 'cloudy':
        console.log('it is cloudy today from switch')
        break
    case 'sunny':
        console.log('this is sunny today from switch')
}

//Arrays

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numbers.length)
console.log(numbers[0])
console.log(numbers[2])
let lasIndex = numbers.length - 1
console.log(numbers[lasIndex]) // get the last index
numbers[0] = 11
console.log(numbers)
numbers[lasIndex] = 80
console.log(numbers)

// Loop
// for loop, while loop, while loop, do while loop, for of loop, for in loop, for each loop

// for (initial, condition, increament/decriment) {

// }

//For loop

for (let i = 0; i <= 5; i++) {
    console.log(i)
    console.log(`${i} x ${i}`)
}

console.log("---------------")

for (let i = 5; i >= 0; i--) {
    console.log(`${i} x ${i}`)
}

console.log("---------------")

const counties = ['Bangladesh', 'Finland', 'Estonia']

for (let i = 0; i < counties.length; i++) {
    // console.log(counties)
    if (counties[i].indexOf('land') == -1)
        console.log(counties[i].toUpperCase())
}

console.log("---------------")

for (let i = 0; i < counties.length; i++) {
    // console.log(counties)


    console.log(counties[i].toUpperCase())
}

//While loop

let i = 0; //initial

while (i <= 5) {
    // increament/decreament
    console.log(i)
    i += i + 1;
}

// Do while
console.log("-Do while--------------")

let k = 5

do {
    console.log(k)
    k = k - 1
} while (k >= 2)

// for of
for (const county of counties) {
    console.log(counties)
}

console.log("---------------")
// // Number of
// for (numbers of ) {
//     console.log(counties)
// }

// Arrys
const nums = [1, 2, 3]
nums.push(4, 5, 6) // to add arry
console.log(nums)
nums.pop()
console.log(nums)
nums.shift()
console.log(nums)
nums.unshift('milk')
console.log(nums)

// splice
nums.splice(2, 1)
console.log(nums)
nums.splice(0, 1)
console.log(nums)
nums.splice(0, 0, 1, 55, 55, )
console.log(nums)
// Syntex : arry.splice (index, number, substitute) 
//if the number is more then 0 it will delete the amout of arry

//Function (purpuse)
function printFunction(firstName) {
    console.log(firstName)
}
printFunction('Atik')

function printFullName(firstName, lastName) {
    const space = ' '
    const fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName('Atikur', 'Rahman')
printFullName('Atikur', 'Rahman')
printFullName('Atikur', 'Rahman')

// areaOfCircle
function areaOfCircle(redious) {
    const pi = 3.14
    const circle = pi * redious ** 2
    console.log(circle)
}
areaOfCircle(10)

// Find list of even numbers


console.log("-Exercise arry for sum--------------")

function evenNumbers(n) {
    let even = []
    for (let i = 0; i <= n; i++) {

        if (i % 2 == 0) {
            even.push(i)
        }
    }
    return even

}
console.log(evenNumbers(10))

console.log("-Exercise arry--------------")

// Odd number
function sumOfOdd(n) {
    let sum = 1
    for (let i = 1; i <= n; i += 2) {
        sum = sum + i
    }
    return sum;
}
console.log(sumOfOdd(100))

// Odd number
console.log("-Exercise--------------")

function sumOfOddd(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 1) {
            sum = sum + i
        }
    }
    return sum;
}
console.log(sumOfOddd(100))

console.log("-calculate weight--------------")

function calWeight(mass, gravity = 9.81) {
    const weight = mass * gravity
    return weight;
}
console.log(calWeight(70))
console.log(calWeight(70, 2.6))