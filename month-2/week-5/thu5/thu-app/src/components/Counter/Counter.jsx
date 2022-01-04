import styles from "./Counter.module.scss";
import { useState } from "react";

// const sorting = (prop) => {};

const Counter = ({ productName }) => {
    const [count, setCount] = useState(0);

    const increment = (n) => {
        setCount(count + n);
    };

    const headingArray = [];

    const colorChange = () => {
        if (count < 20 && count >= 10) {
            headingArray.push(styles["ten-twenty"]);
            return headingArray;
        }
        if (count < 30 && count >= 20) {
            headingArray.push(styles["twenty-thirty"]);
            return headingArray;
        }
        if (count < 40 && count >= 30) {
            headingArray.push(styles["thirty-forty"]);
            return headingArray;
        }
        if (count >= 40) {
            headingArray.push(styles["forty-plus"]);
            return headingArray;
        }
    };

    return (
        <>
            <h1>{productName}</h1>
            <h2 className={colorChange()}>{count}</h2>
            <button onClick={() => increment(-10)}>--</button>
            <button onClick={() => increment(-1)}>-</button>
            <button onClick={() => increment(1)}>+</button>
            <button onClick={() => increment(10)}>++</button>
        </>
    );
};
export default Counter;
