// function declaration
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
const sumallNums2 = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}
console.log(sumallNums2(1, 2, 3, 4, 5, 6, 7, 8, 100))
console.log('test function declarations')
// use for loop
const sumallNums3 = (...args3) => {
    let sum = 0
    for (let p = 0; p < args3.length; p++) {
        sum += args3[p]
    }
    return sum
}
console.log(sumallNums3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log('use for of loop')
// use for of loop
const sumallNums4 = (...args4) => {
    let sum = 0
    for (const num of args4) {
        sum += num
    }
    return sum
}
console.log(sumallNums4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// Mutations

// Do not do this for copying
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 100]
const nums2 = nums1
nums2[1] = 12
console.log(nums1)
console.log(nums2)

// proper copying
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 100]
const nums4 = [...nums3]
nums4[0] = 30
console.log(nums3)
console.log(nums4)

// copy the object 
const user = {
    name: 'Atik',
    age: 250,
    country: 'Finland'
}
console.log(user)
// one way of copying an object
const user2 = Object.assign({}, user, {
    name: 'Sabina'
})
console.log(user2)
// copy using sprade
const user3 = {
    ...user,
    name: 'Rahman'
}
console.log(user3)