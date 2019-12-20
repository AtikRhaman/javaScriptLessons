function nameOffunction() {

}
// naonimus function //callback function
(function (n) {
    console.log(n * n)
})(2)

// Object
const person = {
    firstname: 'Atik',
    lastname: 'Rahman',
    country: 'Finland',
    city: 'Helsinki',
    age: 29,
    ismarrid: false,
    skills: ['HTML ', 'CSS ', 'JavaScript ', 'UX Design ', 'Extensive UX Research ', 'Photoshop ', 'Illustrator ', 'XD ', 'and so on '],
    title: 'Jounior Developer',
    personInfo: function () {
        sent = `${this.firstname} ${this.lastname} .
        He lives in ${this.country}
        He is ${this.age} years old. 
        He is ${this.title} 
        He has ${this.skills.length} skills 
        The skills are ${this.skills}`
        return sent
    }
}
console.log(person)
console.log(person.firstname)
console.log(person['firstname'])
person.nationalities = 'Bangladesh' // inser new kew to the object
person.city = 'Dhaka'
console.log(person.personInfo())

//Tarnary operator

//Object Method
// keys, values, assign, entries, hasOwnPropertis
const student = {
    firstname: 'John',
    country: 'finland',
    age: 25,
    address: {
        city: 'Espo',
        street: 'Ida Aalbergantie',
        zipcode: '00400',
    }
}
console.log(student)
const keys = Object.keys(student)
console.log(keys) // keys as an arry
console.log(student.address.city) // access to nested object keys
student['phone number'] = '0465243555' // insart a key to the student object
console.log(student)
console.log(keys.length) // see the length of the object as an arry (converted the key to an arry)

const values = Object.values(student) // Object value converted to an arry 
console.log(values) // values as an arry

//Copy an object
const student2 = Object.assign({}, student) //mutable object
// const student2 = Object.assign(student) //this change the main object
student2.nationality = 'Finnish'
console.log(student)
console.log(student2)

console.log('for in')

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
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
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
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
        age: 20,
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

const entries = Object.entries(student) // change object to arry of arry
console.log(entries)

for (const entries of entries) {
    con
}