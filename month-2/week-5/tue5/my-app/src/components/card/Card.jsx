import styles from "./Card.module.scss";
const Card = ({ student, position }) => {
    return (
        <div className={styles.Card}>
            <h1>{student}</h1>
            <h1>{position}</h1>
        </div>
    );
};
export default Card;
