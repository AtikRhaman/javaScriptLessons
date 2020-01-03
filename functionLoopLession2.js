function square(n) {
    let squereValue = n * n
    return squereValue
}
console.log(square(2))

console.log('=== Returend sumOfNum ===')

const sumOfNum = (n) => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum = sum + i
    }
    return sum
}
console.log(sumOfNum(5))

console.log('=== Returend sumOfAllNum===')
const sumOfAllNum = (n) => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum = sum + i
        console.log(sum)
    }
    return sum
}
console.log(sumOfAllNum(5))

console.log('=== Returend fullName===')

const fullName = (firstName, lastName) => {
    let space = ' '
    let name = firstName + space + lastName
    return name
}

console.log(fullName('Atik', 'Rahman'))

console.log('=== addTwoNums, it takes two parameter a and b===')

const addTwoNums = (a, b) => {
    let twoNumbers = a + b
    return twoNumbers
}
console.log(addTwoNums(5, 5))

console.log('=== sumNumsInArray, function take array as parameter===')


// there is two task is here, 1.sumNum and 2.make the number as an arry
const sumNumsInArray = (n) => {
    let sumNum = 0 // store or initializing the value of sum
    let array = [] // store or initializing the  arry
    for (let i = 0; i <= n; i++) {
        sumNum = sumNum + i
        array.push(sumNum + i) // convert sum numbers as arry
        console.log(sumNum)
    }
    console.log(array)
    return sumNum
}
console.log(sumNumsInArray(10))