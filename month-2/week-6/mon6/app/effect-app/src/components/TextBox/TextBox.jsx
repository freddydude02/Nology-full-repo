import styles from "./TextBox.module.scss";
import { useEffect } from "react";
const TextBox = ({ text }) => {
    return (
        <>
            <p className={styles["text-box"]}>{text}</p>
        </>
    );
};
export default TextBox;
