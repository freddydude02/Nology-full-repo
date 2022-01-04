// const func = (n, mode, timeout) => {
//     setInterval(() => {
//         n += mode;
//         console.log(n);
//     }, timeout);
// };

// func(0, +1, 1000);

const count = (n, increment, interval) => {
    setInterval(() => {
        n += increment;
        console.log(n);
    }, interval);
};
// count(0, 1, 1000);
