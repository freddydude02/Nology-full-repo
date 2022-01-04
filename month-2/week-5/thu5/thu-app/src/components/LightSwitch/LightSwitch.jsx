import React from "react";
import styles from "./LightSwitch.module.scss";
import { useState } from "react";
const LightSwitch = () => {
    const [isLightOn, setIsLightOn] = useState(false);

    const toggle = () => {
        // isOn = !isOn;
        setIsLightOn(!isLightOn);
    };
    const backgroundClass = isLightOn
        ? styles["light-background"]
        : styles["dark-background"];
    return (
        <div className={backgroundClass}>
            <button onClick={toggle}> On/Off</button>
        </div>
    );
};
export default LightSwitch;
