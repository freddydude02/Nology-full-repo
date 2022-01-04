import Button from "../Button";
import { useState } from "react";

const SearchBar = ({ searchValues }) => {
    const [currentSearch, setCurrentSearch] = useState("");
    console.log(currentSearch);
    // searchValues.searchTerm
    // searchValues.setSearchTerm

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
                    searchValues.setSearchTerm(currentSearch);
                    setCurrentSearch("");
                }}
            ></Button>
        </div>
    );
};

// searchbar will take term and push to history array
// also log searching(item in console)

export default SearchBar;
