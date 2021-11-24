let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
let i = 0;
// for (let i = 0; sum < 55; i++) {
//     sum += array[i];
//     console.log(sum);
// }

first();

function first() {
    if (sum < 55) {
        sum += array[i];
        second();
    } else console.log(sum);
}
function second() {
    i++;
    first();
}
