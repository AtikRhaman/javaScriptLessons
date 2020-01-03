//write an hogher order
// const higherOrder = (m) => {
//     const heigherOrderTwo = (n) => {
//         const heigherOrderThree = (o) => {
//             const heigherOrderFour = (p) => {
//                 let firstName = m
//                 let lastName = n
//                 let age = o
//                 let relationship = p
//                 let personInfo = `${firstName} ${lastName} ${age} ${relationship}`
//                 return personInfo
//             }
//         }
//     }
// }
// console.log(higherOrder('Atikur')('Rahman')('29')('has relationship'))

const higherOrder = (m) => {
    const higherOrderTwo = (n) => {
        const higherOrderThree = (o) => {
            const higherOrderFour = (p, q) => {
                return m + n + o + p + q
            }
            return higherOrderFour
        }
        return higherOrderThree
    }
    return higherOrderTwo
}
console.log(higherOrder('Atik')('rahamn')(3)('yes', 'no'))

const useOfHigherorder = (a) => {
    const useOfHigherorderTwo = (b) => {
        const useOfHigherorderThree = (c) => {
            const useOfHigherorderFour = (d) => {
                return a + b + c + d
            }
        }
    }
}
console.log(useOfHigherorder(20)(30)(40)(50))