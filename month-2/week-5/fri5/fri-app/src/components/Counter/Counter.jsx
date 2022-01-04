import Button from "../Button";
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
            <Button label={"--"} clickHandler={() => increment(-10)}></Button>
            <Button label={"-"} clickHandler={() => increment(-1)}></Button>
            <Button label={"+"} clickHandler={() => increment(1)}></Button>
            <Button label={"++"} clickHandler={() => increment(10)}></Button>
        </>
    );
};
export default Counter;
