//Heigher order function
const square = (n) => n * n

const cube = (callback, n) => {
    return callback(n) * n
}
console.log(cube(square, 2))

const higherOrder = (m) => {
    const higherOrderTwo = (n) => {

        const higherOrderThree = (o) => {

            const higherOrderFour = (p, q) => {
                return m * n * o * p * q

            }
            return higherOrderFour

        }
        return higherOrderThree

    }
    return higherOrderTwo
}
console.log(higherOrder(2)(3)(4)(4, 5))
//- for each with higherorder function

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(function (items, index, arry)) {
//     console.log(items, index)
// }

// const countries = ['Bangladesh', 'Finland', 'Sweden', 'Norway']
// const capitalizeArry = (arr)=>{
//     const nerArr = []
//     for (let i = 0; i<arr.length; i++){
//     return
        
//     }
// }


// map, filtering, reduce, some, every, find
//

let wholeNumbers = [1,2,3,4,5,6,7,8,9,10,11]
const evenNumbers = wholeNumbers.filter(function(number)){
    return wholeNumbers.
}