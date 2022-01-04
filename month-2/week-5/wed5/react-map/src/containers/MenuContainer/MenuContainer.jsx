import styles from "./MenuContainer.module.scss";
import MenuItem from "../../components/MenuItem";
import data from "../../assests/data/menu-data";

const MenuContainer = () => {
    console.log(data);

    const menuItems = data.map((obj, index) => {
        return <MenuItem key={index} data={obj} />;
    });
    console.log(menuItems);

    return (
        <>
            <h1>Menu Container</h1>
            <h2>using fragments</h2>
            <div className={styles["menu-container"]}>{menuItems}</div>
        </>
    );
};
export default MenuContainer;
