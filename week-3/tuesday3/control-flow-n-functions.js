/* else & if */

// let n = 2;
// if (n % 2 == 0) {
//     console.log("n is even");
// } else if (n % 2 !== 0 && n % 2 !== 1) {
//     console.log("idk what this is");
// } else {
//     console.log("n is odd");
// }

// let day = "wed";
// switch (day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("This isn't a day");
// }

function calcMyAge(age) {
    let ageInDays = age * 365;
    let ageInSeconds = ageInDays * (24 * 60 * 60);
    return ageInDays + " and " + ageInSeconds;
}
// console.log(calcMyAge(19));

function areaCalc(radius) {
    let area = Math.PI * radius ** 2;
    return area;
}
// console.log(areaCalc(3));

function circumCalc(radius) {
    let circumference = 2 * radius * Math.PI;
    return circumference;
}
// console.log(circumCalc(3));

function moonCalc(earthDays) {
    let moonOrbit = earthDays / 27;
    return moonOrbit;
}
// console.log(moonCalc(27));

let alpha = ["a", "l", "p", "h", "a", "b", "e", "t"];
let consonant = [];
for (i = 0; i < alpha.length; i++) {
    let check = /^aeiou/;
    if (check.test(alpha[i])) {
        consonant.push[alpha[i]];
    }
}
console.log(consonant);
