import Button from "../Button";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { updateSearchTerm } from "../../services/firebaseUtils";
import RecentSearches from "../RecentSearches";

const SearchBar = ({}) => {
    const [currentSearch, setCurrentSearch] = useState("");
    const data = useContext(SearchContext);

    return (
        <div>
            <input
                type="text"
                value={currentSearch}
                onInput={(e) => setCurrentSearch(e.target.value)}
            ></input>
            <Button
                label={"Search"}
                clickHandler={() => {
                    data.setSearchTerm(currentSearch);
                    updateSearchTerm(
                        "SearchTerms",
                        currentSearch.toLowerCase()
                    );
                    // setCurrentSearch("");
                }}
            ></Button>
            <RecentSearches></RecentSearches>
        </div>
    );
};

// searchbar will take term and push to history array
// also log searching(item in console)

export default SearchBar;
