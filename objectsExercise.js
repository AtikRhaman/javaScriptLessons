const person = {
    firstName: 'Atikur',
    lastName: 'Rahman',
    age: 29,
    location: 'Helsinki',
    skills: ['HTML ', 'CSS ', 'JavaScript ', 'UX Design ', 'Extensive UX Research ', 'Photoshop ', 'Illustrator ', 'XD ', 'and so on '],
    personInfo: function () {
        info = `${this.firstName} ${this.lastName} is ${this.age} years old. He lives in ${this.location}. He has several skills, such as ${this.skills}`
        return info
    },
    address: {
        city: 'Espo',
        street: 'Ida Aalbergantie',
        zipcode: '00400',
    },
    education: {
        university: ['University of oulu', 'Bangladesh university', 'Govt. Graphic arts Institute'],
        certification: ['masters', 'bacelor', 'diploma'],
        subjects: ['GS3D', 'CSE', 'Graphic']
    }
};
console.log(person.personInfo());
person.nationalities = 'Bangladesh' // settings a new key
console.log(Object.keys(person)) // to access the all key of the object
console.log(Object.values(person)) // to access the values of the object
console.log(Object.values.person)
console.log(Object.keys(person.education))
console.log(Object.values(person.address.street))
const atik = person.address.street /// access value to the subobject keys
console.log(atik)
console.log(Object.values(person.address.street))
person.education.countryOfEducation = ['Finland', 'Bangladesh'] // insert key to the education object
console.log(Object.values(person.education))
console.log(Object.keys(person))

//Object Method
console.log('Assign new objects to a variable');

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
copyPerson.education.country = 'Finland' // add new key and value to the Object 
const entries = Object.entries(copyPerson)

//hasownProperty
console.log(copyPerson.hasOwnProperty('name')) // it checkt the objects and returns the true false value
console.log(copyPerson.hasOwnProperty('firstName')) // it checkt the objects and returns the true false value


// for in

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 30,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 40,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 40,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 30,
        isLoggedIn: false,
        points: 40
    }
};
//for in
let count = 0
let names = []
for (const key in users) {
    if (users[key].points >= 50) {
        count++
        names.push(key)
    }
}
console.log(count)
console.log(names)

let countAge = 0
let name = []
for (const key in users) {
    if (users[key].age >= 30) {
        countAge++
        name.push(key)
    }
}
console.log(name)

//Date Object
//JavaScript Date objects

const now = new Date()
console.log(now)
const years = now.getFullYear()
console.log(years)
const month = now.getMonth() + 1
console.log(month)
const date = now.getDate()
console.log(date)
const hours = now.getHours()
console.log(hours)
const min = now.getMinutes()
console.log(min)
const secound = now.getSeconds()
console.log(secound)
console.log(`Today: ${date} Month: ${month} Year: ${years} Time: ${hours} / ${min} ${secound}`)

console.log('======= DisplayDate Function ===========')

function displayDateTime() {
    let currentDate = new Date()
    let date = currentDate.getDate()
    let month = currentDate.getMonth()
    let years = currentDate.getFullYear()
    let hours = currentDate.getHours()
    let min = currentDate.getMinutes()
    let fullDate = date + '/' + month + '/' + years + ' ' + hours + ':' + min
    return fullDate
}
console.log(displayDateTime())

//Excercise Objects
//Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
console.log('=========== emptyObject ===========')

const dog = {
    name: 'myDog',
    legs: 4,
    color: 'black',
    bark: function () {
        let dogSound = 'woof! woof!'
        return dogSound
    },
    breed: {
        child: 4,
        colors: 'all black',
    },
    getDogInfo: function () {
        dogInfo = `My dog name is ${dog.name}. He has ${dog.legs} legs. The color is ${dog.color} and he speaks ${dog.bark()}`
        return dogInfo
    }
}
console.log(dog.bark())
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark())
console.log(dog.getDogInfo())

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and the same for expenses.
const personAccount = {
    firstName: 'Md Atikur',
    lastName: 'Rahman',
    incomesPerMonth: 3000,
    expensesPerMonth: 500,
    totalIncome: function () {
        let incomeFromSalary = 3000
        let incomeFromFreelancing = 300
        let totalIncomeperYear = `Approximate Income should be: ${incomeFromSalary*12 + incomeFromFreelancing*12}`
        return totalIncomeperYear
    },
    totalExpenses: function () {
        let houseRent = 300
        let transport = 50
        let food = 120
        let enterTainment = 50
        let homeExpenses = 2000
        let totalExpensesperYear = `2020 fixed Expenses is: ${houseRent*12 + transport*12 + food*12 + enterTainment*12 + homeExpenses*12}`
        return totalExpensesperYear
    }
}
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())

// javaScript for kids