// Functional programming 
// forEach, map, filter, reduce, some, every, find
// Pure vs Impure Function
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Swizerland']
const strings = ['David', 'John', 'Atik', 'Helmi']
// forEach
countries.forEach(function (elements, index) {
  console.log(elements, index)
})

countries.forEach((elements, index) => console.log(elements, index))

// Map: 
//Iterate an array elements and modify the array elements. It takes a callback function with elements and index parameter and return the modified array.
console.log('===Iterate an array elements and modify the array elements. It takes a callback function with elements and index parameter and return the modified array.==')

const numbers = [1, 2, 3, 4, 5]
const numbersSqure = numbers.map((num) => num + num)
console.log(numbersSqure)
console.log('===Names==')

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesUppercase = names.map((name) => name.toUpperCase())
console.log(namesUppercase)

const countries2 = ['Albania',
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
]
console.log(countries2)