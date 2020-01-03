// Functional programming 
// forEach, map, filter, reduce, some, every, find
// Pure vs Impure Function

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Swizerland']
const strings = ['David', 'John', 'Atik', 'Helmi']

//forEach
countries.forEach(element => console.log(element.toUpperCase()))
countries.forEach(element => console.log(element.toLowerCase()))

//map 
const countriesLength = countries.map(countries => countries.length)
console.log(countriesLength)
const countriesCapitalized = countries.map(countries => countries.toUpperCase())
console.log(countriesCapitalized)

//filter
const countriesWithLand = countries.filter(country => {
  return country.includes('land')
})
console.log(countriesWithLand)
const countriesWithNoLand = countries.filter(country => {
  return !country.includes('land')
})
console.log(countriesWithNoLand)
const countriesWithSixChar = countries.filter(country => {
  return country.length == 6
})
console.log(countriesWithSixChar)

// work with arry: find the total price
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
]
const prices = products.map(products => products.price)
console.log(prices)
const priceWithCleanData = prices.filter(price => typeof price == 'number')
console.log(priceWithCleanData)

//reduce

function callback(accumulator, current) {
  return accumulator + current
}

const total = priceWithCleanData.reduce(function (accu, curr) {
  return accu + curr
})
console.log(total)

//find : it looks for an item and return the first item
const findItems = countries.find(country => {
  return country.includes('land')
})
console.log(findItems)

const findManyItems = countries.filter(country => {
  return country.includes('land')
})
console.log(findManyItems)

const cheapProduct = products.find(product => product.price < 8)
console.log(cheapProduct)

const cheapProducts = products.filter(product => product.price < 8)
console.log(cheapProducts)

const nums = [1, 2, 3, 4]
const isNumber = nums.every(num => typeof num == 'number')
console.log(isNumber)

const str = ['Asab', 'David', 'Marta', 100]
const isStr = str.every(name => typeof name == 'string')
console.log(isStr)
const isSomeStrs = str.some(name => typeof name == 'string')
console.log(isSomeStrs)

console.log('=============Pure vs Impure Function=============')

//pure function
const square = (n) => {
  return n * n
}
console.log(square(5))

//impure function
const generateRandomId = (n = 11) => {
  const lettersAndNums = '0123456abcdefghihjklmnopqrstuvwxyz'
  let id = ''
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * lettersAndNums.length)
    id = id + lettersAndNums[index]
  }
  return id
}
console.log(generateRandomId(10))
console.log(generateRandomId(20))

//impure function
let ten = 10
const addTen = (n) => {
  return n + ten;
}
console.log(addTen(5))