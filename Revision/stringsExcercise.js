// 1. Declare a variable name company and assign it to an initial value 'Coding Academy'.
let company = 'Coding Academy'
console.log(company)
// Print the length of the string on the browser console using console.log()
console.log(company.length)
console.log(company.toUpperCase())
console.log(company.toLowerCase())
console.log(company.slice(0, 6))
console.log(company.substr(0, 6))
console.log(company.substring(0, 6))
let sentance = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentance.substr(31, 52))
console.log(sentance.includes('because'))
console.log(sentance.split(' '))
let companyName = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companyName.split(','))
console.log(company.replace('Coding', 'Mocrosoft'))
console.log(company.charAt(0))
console.log(company.charCodeAt('A'))
console.log(company.indexOf('c'))
console.log(company.lastIndexOf('c'))
console.log(sentance.indexOf('because'))
console.log(sentance.lastIndexOf('because'))
console.log(sentance.search('because'))
console.log(company.trim())
console.log(company.startsWith('Academy'))
console.log(company.startsWith('Coding'))
console.log(company.endsWith('Coding'))
console.log(company.endsWith('Academy'))
console.log(sentance.endsWith('because'))
console.log(company.match('C'))
let companyFirstName = ['Coding']
let companyLastName = ['Academy']
let companyFullName = companyFirstName.concat(companyLastName)
console.log(companyFullName)
console.log(company.repeat(5))
// Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let earnperMonth = 3000
let yearlyBonus = 1000
let onlineIncome = 15000
let anualIncome = `${earnperMonth *12+ yearlyBonus+onlineIncome*12}`
console.log(anualIncome)