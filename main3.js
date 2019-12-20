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

let companyName = 'Coding Academy Coding Academy Coding Academy Coding Academy'

console.log(companyName.length)
console.log(companyName.substr(10))
console.log(companyName.substring(1, 3))
console.log(companyName.slice(1, 3))
console.log(companyName.indexOf('Academy'))
console.log(companyName.includes('Coding'))
console.log(companyName.split(' '))
console.log(companyName.replace('Coding', 'UXAtik'))
console.log(companyName.charAt(10))
console.log(companyName.charCodeAt('2'))
console.log(companyName.length)
let lenThn = companyName.length
console.log(lenThn - 2)
console.log(companyName[0])
console.log(companyName.length)
console.log(companyName.match('Academy'))
console.log(companyName.match(/A/ig)) // this look for the same charectar
console.log(companyName.match(/X/ig)) // this look for the same charectar
console.log(companyName.search('Academy'))
console.log(companyName.search(/Academy/)) // change to regular expression
console.log(companyName.search(/Academy/ig)) // change to regular expression and look for without case sensative
console.log(companyName.match(/Academy/ig)) // change to regular expression