const a = 1;
const b = 2;
const c = 3;

function firstFunction() {
    const b = 5;
    const c = 6;
    console.log(`Third a: ${a}, b: ${b}, c: ${c}`);

    function secondFunction() {
        const b = 8;
        console.log(`First a: ${a}, b: ${b}, c: ${c}`);

        function thirdFunction() {
            const a = 7;
            const c = 9;
            console.log(`Fourth a: ${a}, b: ${b}, c: ${c}`);

            function fourthFunction() {
                const a = 3;
                const c = 8;
                console.log(`Second a: ${a}, b: ${b}, c: ${c}`);
            }

            fourthFunction();
        }

        thirdFunction();
    }

    secondFunction();
}

firstFunction();

//first a:1, b:8, c:6
//second a:3, b:8, c:8
//third a:1, b:5, c:6
//fourth a:7, b:8, c:9
