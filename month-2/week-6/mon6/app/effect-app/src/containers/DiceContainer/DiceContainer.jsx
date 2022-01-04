import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import { useState, useEffect } from "react";

const DiceContainer = () => {
    const [result, setResult] = useState("");
    useEffect(() => console.log("result has changed to " + result), [result]);

    const diceRoll = () => Math.floor(Math.random() * 2 + 1);
    return (
        <div>
            <Button
                label="roll"
                clickHandler={() => setResult(diceRoll())}
            ></Button>
            <TextBox text={result}></TextBox>
        </div>
    );
};
export default DiceContainer;
