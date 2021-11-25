let indexOf = (array, callBack) => {
    for (i = 0; i < array.length; i++) {
        if (callBack === array[i]) return i;
    }
    return -1;
};
let realArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(indexOf(realArr, 0));
