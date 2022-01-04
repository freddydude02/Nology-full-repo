const car = {
    brand: "honda",
    model: "civic",
    release: "1990",
    isManual: false,
    color: "red",
    wheels: 4,
};

reverseObject = (obj) => {
    const arr = Object.entries(obj);
    const reverseArr = arr.map((KeyValuePair) => {
        let KVP = [...KeyValuePair];
        KVP.reverse();
        return KVP;
    });
    return Object.assign({}, reverseArr);
};

console.log(reverseObject(car));
