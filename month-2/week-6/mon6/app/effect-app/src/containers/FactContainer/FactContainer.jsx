import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import { useState, useEffect } from "react";

const FactContainer = () => {
    const [showText, setShowText] = useState(true);
    const [textContent, setTextContent] = useState("fact is not ready yet");

    const getFacts = async () => {
        const url = "https://catfact.ninja/fact";
        const response = await fetch(url);
        const json = await response.json();
        let fact = json.fact;
        setTextContent(fact);
    };

    useEffect(() => {
        console.log("Called on mount or showText state change");
        getFacts();
    }, [showText]);

    return (
        <>
            <Button
                label="New Fact"
                clickHandler={() => setShowText(!showText)}
            ></Button>
            {showText ? <TextBox text={textContent}></TextBox> : undefined}
        </>
    );
};
export default FactContainer;
