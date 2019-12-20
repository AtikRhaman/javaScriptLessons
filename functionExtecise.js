//Functions Excercise
//1. Declare a function fullName and it print out your full name.
function fullName() {
    let firstName = 'Atik '
    let lastName = 'Rahman'
    let name = firstName + lastName
    return name
}
console.log(fullName())
//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameAsPera(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    return fullName
}
console.log(fullNameAsPera('Atik', 'Rahman'))
//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(addNumbers(100, 200))

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(30, 40))

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    let area = 2 * (length + width)
    return area
}
console.log(perimeterOfRectangle(30, 40))
//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(20, 30, 20))

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    let PI = Math.PI
    let area = PI * r **2
    return area
}
console.log(areaOfCircle(10))

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    let PI = Math.PI
    let circum = 2 * PI * r
    return circum
}
console.log(circumOfCircle(10))
//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubs(mass, volume) {
    let density = mass / volume
    return density
}
console.log(densityOfSubs(10, 20))

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
speedOfMovObj = (distance, time) => {
    let speed = distance / time
    return speed
}
console.log(speedOfMovObj(12, 2))

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function WeightOfSubstance(mass, gravity) {
    let weight = mass * gravity
    return weight
}
console.log(WeightOfSubstance(5, 10))

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
convertCelciusToFahrenheit = (oC) => {
    let oF = (oC * 9 / 5) + 32
    return oF
}
console.log(convertCelciusToFahrenheit(100))

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
calculatesBmi = (weight, height) => {
    let bmi = weight * height * height
    return bmi
}
console.log(calculatesBmi(64, 1.70688))

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    let x = month;
    switch (x === month) {
        case (x == 'September' || 'October' || 'November'): {
            console.log('this is Autumn')
        }
        break;
    case (x == 'December' || 'January' || 'February'): {
        console.log('this is Winter')
    }
    break;
    case (x == 'June' || 'July' || 'August'): {
        console.log('This is Summer')
    }
    break;
    }
}
checkSeason('December')

// 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// function findMax(a, b, c) {
//     if (a >= b || c) {
//         console.log(a)
//     } else if (b >= a || c) {
//         console.log(b)
//     } else if (c >= a || b) {
//         console.log(c)
//     }
// }
// findMax(0, -10, -2)

function findMax(...arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(1, 2, 3, 4, 5, 6, -7, 3, 1))

//16. Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
//17. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.