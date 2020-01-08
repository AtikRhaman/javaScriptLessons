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
// const url = 'https://restcountries.eu/rest/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(apies => {
//     for (const countryName of apies) {
//       let {
//         name,
//         topLevelDomain,
//         capital,
//         population,
//         languages,
//         latlng,
//       } = countryName
//       if (name == 'Bangladesh') {
//         console.log(`Name of the Country: ${name}, population is around ${population}. and the latlng are ${latlng}`)
//       }
//     }
//   })

console.log('=========Destructing Arrays===========')
// Destructing Arrays
const numbers = [1, 2, 3, 4]
let [one, two, three, four] = numbers
console.log(one)
console.log(two)
console.log(three)
console.log(one, two, three, four)
const names = ['Atik', 'Rayat', 'Tasfiq', 'Rakib', 'Sabina', 'Luna', 'tondra', 'joba']
const [family1, family2, family3, family4, ...allgf] = names
console.log(names)
console.log(family1)
console.log(family2)
console.log(family3)
console.log(family1, family2, family3, family4)
const names2 = [...names]
names2[5] = 'Jonaki'
console.log(names2)
console.log(allgf)
let [at, rt, ts, rk, sb, ln, tr, jo] = names
console.log(at, rt, ts, rk, sb, tr, jo)
const inteNames = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, , thirdPerson, fourthPerson] = inteNames
console.log(thirdPerson, fourthPerson)

console.log('=========Destructuring Object===========')
// Destructuring Object
const rectangle2 = {
  width: 20,
  height: 10,
  area: 120
}
let {
  width: wd,
  height: hi,
  area: ar,
  parimeter2 = 80,
} = rectangle2
console.log(wd)
console.log(hi)
console.log(ar)
console.log(parimeter2)
console.log(rectangle2)

let {
  wd2,
  hi2,
  ar2,
  parimeter3 = 40,
} = rectangle2
console.log(wd, hi, ar, parimeter3)

// Destructuring keys as a function parameters.
const rect = {
  width: 20,
  height: 10
}
const calculatePara = (a) => {
  return 2 * (a.width + a.height)
}
console.log(calculatePara(rect))

const myNumbers = [3, 10, 20]
const addNums = (i) => {
  return i[0] + i[1] + i[2]
}
console.log(addNums(myNumbers))

const person = {
  firstName: 'Atik',
  lastName: 'Rahman',
  age: 200,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
};

// Lets create a function which give information about the person object without destructuring
const persoInfo = (obj) => {
  const skills = obj.skills
  const languages = obj.languages
  const name = obj.firstName
  return `${name} has good kn owladge of ${skills} and he speaks ${languages}`
}
console.log(persoInfo(person))
// // Lets create a function which give information about the person object with destructuring
const personInfoWithDisc = ({
  firstName,
  skills,
  languages
}) => {
  return `${firstName} has good knowladge of ${skills} and he speaks ${languages}`
}

console.log(personInfoWithDisc(person))