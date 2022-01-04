import styles from "./MenuItem.module.scss";

export const MenuItem = ({ data }) => {
    return (
        <div className={styles["menu-item"]}>
            <h1>{data.item}</h1>
            <p>{data.description}</p>
        </div>
    );
};
export default MenuItem;
