import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
const RecentSearches = () => {
    const recentSearches = useContext(SearchContext).recentSearches;
    // console.log(recentSearches);

    const getMostRecent = (count, array) => {
        const sortedArr = array.sort((a, b) => {
            return (a.timestamp = b.timestamp);
        });
        console.log("sorted", sortedArr);
    };

    getMostRecent(3, recentSearches);

    return (
        <div>
            <h2>Recent Searches:</h2>
            <h3>Canada</h3>
            <h3>Australia</h3>
            <h3>Russia</h3>
        </div>
    );
};
export default RecentSearches;
