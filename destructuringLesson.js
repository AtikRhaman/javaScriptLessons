// Destructuring and spreading
​
//First start by destructuring arrays
​
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums​
console.log(num1)
console.log(num2)
console.log(num3)
console.log(rest)​
const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]
let [gem, fra, , ...nordic] = countries​
console.log(gem)
console.log(fra)
console.log(nordic)​
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]​
let [frontEnd, backEnd] = fullStack
console.log(frontEnd)​
// Destructuring objects
​
const rectangle = {
  width: 20,
  height: 10
}​
let {
  width,
  height,
  perimeter = 200
} = rectangle
console.log(width, height, perimeter)​
// let { width: w, height: h, perimeter = 200 } = rectangle
// console.log('w:', w, 'h:', h, perimeter)
​
console.log(rectangle)​
// fetch to fetch data
​
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(countries => {
    for (const country of countries) {
      let {
        name,
        capital,
        population,
        region,
        languages,
        topLevelDomain: domain
      } = country
      console.log(name, capital, population, region, languages, domain[0])
    }
  })

// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
  return sum
}​
console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 100))​
const sumAllNums2 = (...args) => {
  let sum = 0
  for (const num of args) {
    sum += num
  }
  return sum
}​
console.log(sumAllNums2(1, 2, 3, 4, 5, 6, 7, 8, 100))
// Mutation
​​
// Do not do this for copying
// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 100]
// const nums2 = nums1
// nums2[0] = 10
// console.log(nums1)
// console.log(nums2)
​
// proper copying use concat or spread
// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 100]
// const nums2 = [].concat(nums1)
// nums2[0] = 10
// console.log(nums1)
// console.log(nums2)
​
// proper copying use concat or spread
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 100]
const nums2 = [...nums1]
nums2[0] = 10
console.log(nums1)
console.log(nums2)​
const user = {
  name: 'Asab',
  age: 250,
  country: 'Finland'
}
// one way of copying an object
const user2 = Object.assign({}, user, {
  name: 'Usen Bolt'
})
console.log(user2)
// using spread operator
​
const user3 = {
  ...user,
  name: 'David'
}
console.log(user3)