import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import { useState } from "react";

const TextContainer = () => {
    const [showText, setShowText] = useState(true);
    const [textContent, setTextContent] = useState("Cool");
    return (
        <>
            <Button
                label="Show Text"
                clickHandler={() => setShowText(!showText)}
            ></Button>

            <Button
                label="Change Text"
                clickHandler={() => setTextContent(textContent + "!")}
            ></Button>
            {showText ? <TextBox text={textContent}></TextBox> : undefined}
        </>
    );
};
export default TextContainer;
