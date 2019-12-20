let firstName = 'Atikur'
let lastName = 'Rahman'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'Programmer'
let space = ' '
let age = 29
let companyName2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let fullName = firstName + space + lastName

let personInfoOne = fullName + space + 'I am' + space + age + space + 'years old, ' + space + 'I live in.' + space + country;
console.log(fullName)
console.log(personInfoOne)

var companyName = 'Coding Academy So coding'
console.log(companyName)
console.log(companyName.length)
console.log(companyName.toUpperCase())
console.log(companyName.toLowerCase())
console.log(companyName.substr(10))
console.log(companyName.slice(1, 4)) // count the index
console.log(companyName.substr(1, 4)) // count the legnht
console.log(companyName.substring(1, 4)) // count the index

let sentenceName = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceName.length)
console.log(sentenceName.indexOf('because'))
console.log(sentenceName.indexOf(' because because because'))
console.log('because because because'.length)
console.log(sentenceName.substr(31, 23))
console.log(sentenceName.slice(31, 50))
console.log(companyName.includes('Academy'))
console.log(sentenceName.split(' ')) // convert into the array
console.log(companyName2.split(','))
console.log(companyName.replace('Coding', 'Microsoft'))
console.log(companyName.charAt(10))
console.log(companyName.charCodeAt('S'))
console.log(companyName.trim())
console.log(companyName.startsWith('C'))
console.log(companyName.endsWith('C'))
console.log(companyName.match(/Cod/ig))
console.log(companyName.repeat(3))
console.log(companyName.trim())




//condition

// let isRaining = false
// if (isRaining === true) {
//     console.log('you should bring umbrella')
// } else {
//     console.log('go out freely')
// }