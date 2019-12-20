// conditions
// 
let sum = 0;

function evenNumber(n) {

    for (i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        } else if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum
}
console.log(evenNumber(10));