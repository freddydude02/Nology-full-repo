import Card from "../../components/card/Card";
import styles from "./CardContainer.module.scss";
const CardContainer = () => {
    return (
        <div className={styles["card-container"]}>
            <Card student="Aiden" position="student" />
            <Card student="Fred" position="student" />
            <Card student="Avii" position="student" />
            <Card student="Jed" position="student" />
            <Card student="Sam" position="student" />
            <Card student="Amy" position="student" />
        </div>
    );
};
export default CardContainer;
