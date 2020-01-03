//conditionals
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for. Output:
// let ageCons = 18
// let yourAge = prompt('enter your age')
// let leftAge = ageCons - yourAge

// if (yourAge >= ageCons) {
//     console.log('you can drive')
// } else {
//     console.log(`you are left with ${leftAge} years`)
// }
//2. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. Output:
// let myAge = 29
// let yourAge = prompt('enter your age')
// let older = yourAge - myAge
// let younger = myAge - yourAge

// if (myAge < yourAge) {
//     console.log(`You are ${older} years older than me`)
// } else if (myAge = yourAge) {
//     console.log('both we are in a same age')
// } else {
//     console.log(`you are ${younger} years younger than me`)
// }
// 3. Write a code which give grade students according to theirs scores
// let yourMark = 49
// switch (yourMark) {
//     case yourMark = 80:
//         console.log('A')
//         break;
//     case yourMark = 70:
//         console.log('B')
//         break;
//     case yourMark = 60:
//         console.log('C')
//         break;
//     case yourMark = 50:
//         console.log('D')
//         break;
//     case yourMark = 49:
//         console.log('F')
//         break;
//     default:
//         console.log('Input is not correct')
//         break;
// }

// 5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// let autumn = September || October || November
// let winter = December || January || February
// let spring = March || April || May
// let summer = June || July || August

// let a = prompt('Enter Month')

// switch (true) {
//     case a === 'September' || a === 'October' || a === 'November':
//         console.log('autumn')
//         break;
//     case a === 'December' || a === 'January' || a === 'February':
//         console.log('winter')
//         break;
//     case a === 'December' || a === 'January' || a === 'February':
//         console.log('winter')
//         break;
//     case a === 'March' || a === 'April' || a === 'May':
//         console.log('spring')
//         break;
//     case a === 'June' || a === 'July' || a === 'August':
//         console.log('summer')
//         break;
//     default:
//         console.log('Somthing wrong')
// }
// 5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
//other way of switch
// let a = prompt('Enter Month')
// switch (a) {
//     case 'September':
//     case 'October':
//     case 'November':
//         console.log('autumn')
//         break;
//     case 'December':
//     case 'January':
//     case 'February':
//         console.log('winter')
//         break;
//     case 'December':
//     case 'January':
//     case 'February':
//         console.log('winter')
//         break;
//     case 'March':
//     case 'April':
//     case 'May':
//         console.log('spring')
//         break;
//     case 'June':
//     case 'July':
//     case 'August':
//         console.log('summer')
//         break;
//     default:
//         console.log('Somthing wrong')
// }
// 5.
// write with ifelase
let b = prompt('enter month')
if (b === 'September' || b === 'October' || b === 'November') {
    console.log('Autum')
} else if (b === 'December' || b === 'January' || b === 'February') {
    console.log('Winter')
} else if (b === 'March' || b === 'April' || b === 'May') {
    console.log('Spring')
} else if (b === 'June' || b === 'July' || b === 'August') {
    console.log('Summer')
} else {
    console.log('Somthing wrong')
}