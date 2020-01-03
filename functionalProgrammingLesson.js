/*
 All functional programming methods:forEach, map, filter, reduce, find, some, every
*/
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Swizerland']
const strings = ['David', 'John', 'Atik', 'Helmi']
// forEach,  map, filter, reduce
// For Each
countries.forEach(element => console.log(element.toUpperCase()))​
// map
​
const countriesLength = countries.map(country => country.length)
console.log(countriesLength)
const countriesCapitalized = countries.map(country => country.toUpperCase())
console.log(countriesCapitalized)
const countriesList = countries.map(
  country => `<li>${country.toUpperCase()}</li>`
)
console.log(countriesList)​
// filter
​
const countriesWithLand = countries.filter(country => {
  return country.includes('land')
})​
const countriesWithNoLand = countries.filter(country => {
  return !country.includes('land')
})
console.log(countriesWithNoLand)​
const countriesWithSixChar = countries.filter(country => {
  return country.length == 6
})
console.log(countriesWithSixChar)​
const products = [{
    product: 'banana',
    price: 3
  },
  {
    product: 'mango',
    price: 6
  },
  {
    product: 'potato',
    price: ' '
  },
  {
    product: 'avocado',
    price: 8
  },
  {
    product: 'coffee',
    price: 10
  },
  {
    product: 'tea',
    price: ''
  }
]​
const prices = products.map(product => product.price)
console.log(prices)
const pricesWithCleanData = prices.filter(price => typeof price == 'number')
console.log(pricesWithCleanData)
// Reduce
function callback(accumulator, current) {
  return accumulator + current
}
// arr.reduce(callback)
​
const total = pricesWithCleanData.reduce(function (accu, curr) {
  return accu + curr
})
console.log(total)
// find: it looks for an item and return the first item
const findOneItem = countries.find(country => {
  return country.includes('land')
})
console.log(findOneItem)
const findManyItems = countries.filter(country => {
  return country.includes('land')
})
console.log(findManyItems)​
const cheapProduct = products.find(product => product.price < 8)
console.log(cheapProduct)​
const cheapProducts = products.filter(product => product.price < 8)
console.log(cheapProducts)
// every , some
const nums = [1, 2, 3, 4]​
const isNumber = nums.every(num => typeof num == 'number')
console.log(isNumber)
const str = ['Asab', 'David', 'Marta', 100]​
const isStr = str.every(name => typeof name == 'string')
console.log(isStr)​
const isSomeStrs = str.some(name => typeof name == 'string')
console.log(isSomeStrs)

// Pure vs Impure Function
// Pure functions return the same value for the same output
// Pure function global variable not allowed
​
// Pure Function
​
const square = (n) => {
  return n * n
}
console.log(square(2))​
// Pure Function
const add10 = (n) => {
  let ten = 10
  return n + ten;
}
console.log(add10(5))​
// Impure Function
​
const generateRandomId = (n = 6) => {
  const lettersAndNums = '0123456abcdefghihjklmnopqrstuvwxyz'
  let id = ''
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * lettersAndNums.length)
    id = id + lettersAndNums[index]
  }
  return id

}
console.log(generateRandomId())
console.log(generateRandomId(12))
// Impure Function
let ten = 10​
const addTen = (n) => {
  ​
  return n + ten;
}
console.log(addTen(5))