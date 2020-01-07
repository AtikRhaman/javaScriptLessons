// Destructuring and spreading
//First start by destructuring arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, num4, ...rest] = nums
console.log(num1)
console.log(num2)
console.log(num3)
console.log(rest)
// add two arrys


//destructuring arry with countries
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
let [ger, fran, bel, ...nordic] = countries
console.log(ger)
console.log(fran)
console.log(bel)
console.log(nordic)

console.log('================ two arrys in newArrys==============')
const newArry = [...nums, ...countries]
console.log(newArry)
const newArryConcat = nums.concat(countries)
console.log(newArryConcat)
// arry in arry 
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
let [frontEnd, backEnd] = fullStack
console.log(frontEnd)
console.log(backEnd)
// Destructuring objects

const rectangle = {
  width: 20,
  height: 10
}
let {
  width: w,
  height: h,
  parimeter = 200,
} = rectangle
console.log(w)
console.log(h)
console.log(parimeter)




//fetch to fetch data
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(apies => {
    for (const countryName of apies) {
      let {
        name,
        topLevelDomain,
        capital,
        population,
        languages,
        latlng,
      } = countryName
      if (name == 'Bangladesh') {
        console.log(`Name of the Country: ${name}, population is around ${population}. and the latlng are ${latlng}`)
      }
    }
  })