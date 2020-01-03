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
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    }, {
        product: 'tea',
        price: ""
    }
]
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const names = ['David', 'John', 'Atik', 'Helmi']

//for each
function callback(element, i) {
    console.log(element)
}
countries.forEach(callback)

//map
function callback(item) {
    return item
}
countries.map(callback)

// find the sum of the price
const prices = products.map((product) => product.price)
console.log(prices)

const printWithOutCleadnData = prices.filter (price)