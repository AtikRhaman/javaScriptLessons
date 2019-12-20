//Excercise 4
//Strings
let company = 'Code Academy '
let brand = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let sentance = 'You cannot end a sentence with because because because is a conjunction'
let space = ' '
let fractionalNumbers = 123.49
let fractionalNumbersUp = 123.99

console.log(company)
console.log(company.length)
console.log(company.toUpperCase())
console.log(company.toLowerCase())
console.log(company.slice(5))

console.log('Use os substr')
console.log(sentance.length)
console.log(sentance.substr(30, 25)) // start index 30 to next 25 index (charecter space)
console.log(sentance.includes('because'))
console.log(company.includes('Academy'))
console.log(sentance.split(' ')) //convert into the arry

console.log(brand.split(','))
console.log(company.replace('Code', 'Microsoft')) // write old name then write new name
console.log(company.charAt(0))
console.log(company.indexOf('Code')) // if we need to know the index of the first cherector of any sentanc or word
console.log(company.lastIndexOf('e')) // to find the last cherecter index position
console.log(sentance.length)
console.log(sentance.lastIndexOf('n'))
console.log(sentance.indexOf('because'))
console.log('Use os search')
console.log(company.search('Academy'))
console.log(company.trim()) // remove the white space
console.log(company.startsWith('Code'))
console.log(brand.endsWith('n'))
console.log(brand.match('n'))
console.log(company.concat(space + brand))
console.log(company.repeat(5))

console.log('Anual income for atik')
let salaryInMonth = 3150;
let bonusPerYear = 0;
let frelancingPerMonth = 300;
let totalIncomeAnually = (salaryInMonth * 12) + bonusPerYear + (frelancingPerMonth * 12);
console.log(totalIncomeAnually)

// Numbers and Math Objects
const PI = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(fractionalNumbers);
console.log(Math.floor(fractionalNumbersUp)) // comes to down value
console.log(Math.round(fractionalNumbers)); // goes to nearest value
console.log(Math.ceil(fractionalNumbersUp)) // goes to up value
console.log(Math.ceil(fractionalNumbers))

console.log(Math.random()) // math.random method
let nuM = Math.floor(Math.random() * 100) // generaterandom numbers between 0 to 99
console.log(nuM)
console.log(Math.abs(-100.9))
console.log(Math.abs(null))
console.log(Math.abs('Hello'))
console.log(Math.abs(3 + 5))
console.log(Math.sqrt(9))
console.log(Math.sqrt(2))
console.log(Math.E)

//Excercise 5
//Booleans
let isMarid = false;
let isRaining = false;
let isCloudy = true;
console.log(isCloudy)

let num1 = 2 > 3
let num2 = 2 < 3
let num3 = 4 >= 3
let num4 = 2 >= 3
let num5 = 2 == '2' // equvalent
let num6 = 3 === 3 // exactly equal
let num7 = 4 !== 4 // exactly not equal 3
let num8 = 4 !== '4'
let num9 = 4 === '4'
console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9)

// Arethmatic Operator
const pI = Math.PI;
let radious = 100;
const gravity = 9.81;
let mass = 72;
const boilingPoint = 100;
let bodyTemp = 37;

// area of a circle PIRsquire
let area = Math.PI * radious * radious
console.log(area)

//string interpolation
console.log(
    `the boiling point of water is ${boilingPoint} human body temparature is ${bodyTemp} and gravity of arth is ${gravity}`
)

//Aritmatic Operator

const check = !(4 > 3) && 10 > 3 // both need to be true
const isLightOn = !false;
console.log(isLightOn);
let check2 = 4 > 3 && 10 < 12
let check3 = 4 > 3 && 10 > 12 //false
let check4 = 4 > 3 || 10 < 12 //true
let check5 = 4 > 3 || 10 > 12 //false
let check6 = !(4 > 3) //false
let check7 = !(4 < 3) //true
let check8 = !(false) //true
let check9 = !(4 > 3 && 10 < 12) //false
let check10 = !(4 > 3 && 10 > 12) //true
let check11 = !(4 === '4') // true
console.log(check2)
console.log(check3)
console.log(check4)
console.log(check5)
console.log(check6)
console.log(check7)
console.log(check8)
console.log(check9)
console.log(check10)
console.log(check11)

//Conditionals
//if else
let isRainingToday = false;
if (isRaining === true) {
    console.log('go with umbrala')
} else {
    console.log('feel free to go')
}

//if else if else
let weather = 'sunny'
if (weather === 'sunny') {
    console.log('today is sunny day')
} else if (weather === 'rainny') {
    console.log('today is rainny day')
} else {
    console.log('there is no wather forcust today')
}

//switch
switch (weather === 'sunny') {
    case 'sunny':
        console.log('today is sunny day from switch')
        break;
    case 'rainny':
        console.log('today is rainny day from switch')
        break;
    case 'cloudy':
        console.log('today is cloudy day from switch')
    default:
        console.log('No one know the future pradictions')
}

// conditional using prompt
// let age = prompt('Please enter your age');
// if (age === 30) {
//     console.log('your are allowed to drive')
// } else {
//     console.log('you are not allowed to drive')
// }

// let yourAge = prompt('Please enter your age');

// if (yourAge >= 29) {
//     console.log('your are older then me')
// } else {
//     console.log('you are juniour')
// }

let a = 30

if (a >= 80) {
    console.log('A Congratulation')
} else if (a >= 70) {
    console.log('B good result!')
} else if (a >= 60) {
    console.log('C still good result!')
} else if (a >= 50) {
    console.log('D result is so so!')
} else {
    console.log('F! you need more attentention to your study')
}

// let season = prompt('Enter the month name')
// let x = season
// if (x == 'September' || x == 'October' || x == 'November') {
//     console.log('this is Autumn')
// } else if (x == 'December' || x == 'January' || x == 'February') {
//     console.log('this is Winter')
// } else if (x == 'March' || x == 'April' || x == 'May') {
//     console.log('this is Spring')
// } else if (x == 'June' || x == 'July' || x == 'August') {
//     console.log('This is Summer')
// } else {
//     console.log('Please write in a correct formate')
// }

// let season = prompt('Enter the month Name')
// let x = season
// switch (x === season) { // make sure this statement is true

//     case (x == 'September' || 'October' || 'November'): {
//         console.log('this is Autumn')
//     }
//     break;
// case (x == 'December' || 'January' || 'February'): {
//     console.log('this is Winter')
// }
// break;
// case (x == 'March' || 'April' || 'May'): {
//     console.log('this is Spring')
// }
// break;
// case (x == 'June' || 'July' || 'August'): {
//     console.log('This is Summer')
// }
// }

console.log('for loop')
// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log('while loop')
//while loop
let i = 0;
while (i <= 10) {
    console.log(i)
    i++;
}
console.log('do while loop')
//do while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 10);

//Exercises:Loops
console.log('for loop Excercise')
// for loop
for (let l = 10; l >= 0; l--) {
    console.log(l)
}
console.log('while loop Excercise')
//while loop
let m = 10;
while (m >= 0) {
    console.log(m)
    m--;
}
console.log('do while loop Excercise')
//do while loop
let n = 10;
do {
    console.log(n);
    n--;
} while (n >= 0);
console.log('loop #############')
let hash = ''
for (let p = 0; p <= 6; p++) {
    hash = hash + '#';
    console.log(hash)
}
let items = ['HTML', 'CSS', 'JavaScript']
for (let q = 0; q < items.length; q++) {
    console.log(items[q])
}
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
console.log('print the sum of all numbers')
let sum = 0
for (let j = 0; j <= 6; j++) {
    sum = sum + j
    console.log(sum)
}

//Arrays
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers.length)
let lasIndex = numbers.length - 1
console.log(lasIndex)
console.log(numbers[lasIndex])

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
console.log(webTechs)
console.log(webTechs.length)
let lastIndexWebTech = webTechs.length - 1
console.log(lastIndexWebTech)
console.log(webTechs[lastIndexWebTech])

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
console.log(countries)
console.log(countries.length)
let lastIndexCountries = countries.length - 1
console.log(lastIndexCountries)
console.log(countries[lastIndexCountries])

// Excercise 9 : Arrays
//1
let empty = []
console.log(empty)
//2 
let arryFiveNumbers = [1, 2, 3, 4, 5]
console.log(arryFiveNumbers)
let typeofFiveNumbers = typeof (arryFiveNumbers)
console.log(typeofFiveNumbers)
console.log(arryFiveNumbers.length)

let firstItem = arryFiveNumbers[0]
let lastItem = arryFiveNumbers[arryFiveNumbers.length - 1]
let middleItem = arryFiveNumbers[Math.floor(arryFiveNumbers.length / 2)]
console.log(firstItem)
console.log(lastItem)
console.log(middleItem)

let mixedDataTypes = ['atik', 30, true, null, undefined]
console.log(mixedDataTypes)
let mixedDataTypesFirstItem = typeof (mixedDataTypes[3])
console.log(mixedDataTypesFirstItem)
console.log(itCompanies)
let numberOfCompanies = itCompanies.length
console.log(numberOfCompanies)
let firsCompany = itCompanies[0]
console.log(firsCompany);
let lastCompany = itCompanies[itCompanies.length - 1] //last idext of the arry
console.log(lastCompany)
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
console.log(middleCompany)
let eachCompany = itCompanies.toString(); // toshort method convert the arry to genaral text by removing the "" but keep the ,
console.log(eachCompany)
let eachCompanyUpercase = eachCompany.toUpperCase()
console.log(eachCompanyUpercase)
//12
let printWithoutLastCom = itCompanies.slice(0, itCompanies.length - 1).toString()
console.log(`${printWithoutLastCom} and ${lastCompany} are bing IT companies`)

//13
// let userInputCom = prompt('please fined the company')
// let matchCompany = eachCompany.match(userInputCom)
// if (userInputCom == matchCompany) {
//     console.log(`${matchCompany} is avilable`)
// } else {
//     console.log(`${userInputCom} is not avilable`)
// }
//14 (need to do)

//15
let shortItcompanies = itCompanies.sort()
console.log(shortItcompanies)
//16
// let reversItCompaniesIndex = shortItcompanies.length - 1
// console.log(reversItCompaniesIndex)
// let reversItCompanies = ['']
// for (r = reversItCompaniesIndex; r >= 0; r--) {
//     reversItCompanies = reversItCompanies[i]
//     console.log(reversItCompanies)
// }
// console.log(reversItCompanies)

//17 
let reversItCompanies = shortItcompanies.reverse()
console.log(reversItCompanies)
//18
let firstThreeCom = reversItCompanies.slice(0, 3)
console.log(firstThreeCom)
//19
let lastThreeCom = reversItCompanies.slice(reversItCompanies.length - 3)
console.log(lastThreeCom)
//20 
let reversItCompaniesIndex = reversItCompanies.length - 1
console.log(reversItCompaniesIndex)
let midItCom = itCompanies[Math.ceil(reversItCompaniesIndex / 2)]
console.log(midItCom)

//21
let removeFirstItCom = reversItCompanies.slice(1, reversItCompaniesIndex)
console.log(removeFirstItCom)
//22

//23
let removeLastItCom = reversItCompanies.slice(0, reversItCompaniesIndex - 1)
console.log(removeLastItCom)

// More on arry
console.log('More on Arry')

// creates an an empty array
const arr = Array()
console.log(arr);
//creates eight empty values
const eightEmptyValues = Array(8)
console.log(eightEmptyValues);
//fill:Fill all the array elements with a static value
const eightXvalue = Array(8).fill('X')
console.log(eightXvalue);
//To concatenate two arrays.
let firstList = [1, 2, 3];
let secoundtList = [4, 5, 6]
let thirdList = firstList.concat(secoundtList)
console.log(thirdList)
//Length:To know the size of the array
let number = [1, 2, 3, 4, 5, 6, 5, 'text']
console.log(number.length);

// indexOf:To check if an item exist in an array. If it exist it returns the index else it returns -1.
console.log(number.indexOf(5))
console.log(number.indexOf(4))
console.log(number.indexOf(2))
console.log(number.indexOf(5))

//lastIndexOf:Give the position of the last item in the array. If it exist it returns the index else it returns -1.
console.log(number.lastIndexOf(5))
console.log(number.lastIndexOf(0))
console.log(number.lastIndexOf(5))

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(number.includes(4)) // return true false
console.log(number.includes(5))
console.log(number.includes(0))

//Array.isArray:To check if the data type is an array
console.log(Array.isArray(number)); // to check the assign variable is arry or not

//toString:Converts array to string
const fewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
console.log(fewNumbers.toString())
//toString:Converts array to string
console.log(itCompanies.toString())
//join:To join the elements of the array, the argument passed in the join method will be joined in the array and return as a string.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.join())
console.log(names.join(''))
console.log(names.join(' '))
console.log(names.join(', '))
console.log(names.join(' # '))

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position
console.log(fewNumbers.slice())
console.log(fewNumbers.slice(0))
console.log(fewNumbers.indexOf(0, fewNumbers.length))
console.log(fewNumbers.slice(1, 4)) // it count from index 1 to 4

//Splice: It takes three parameters:Starting position, number of times to be removed and number items to be added.
console.log(fewNumbers.splice()) // 1st: position of Index, 2nd: number of delete, 3rd: add item
console.log('ghjklöfghjkl')
console.log(fewNumbers)
console.log(fewNumbers.splice(0, 2, "atik"))
console.log(fewNumbers);

//Push: adding item in the end
console.log(fewNumbers.push("Apple"))
console.log(fewNumbers)

//Pop: Removing item in the end
console.log(fewNumbers.pop())
console.log(fewNumbers)

//shift: Removing item in the start
console.log(fewNumbers.shift())
console.log(fewNumbers)
console.log(fewNumbers.unshift('AtikRahman'))
console.log(fewNumbers)