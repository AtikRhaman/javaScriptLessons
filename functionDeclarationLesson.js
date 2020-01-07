// function declaration
​
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