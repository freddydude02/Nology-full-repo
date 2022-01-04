import { useState, createContext, useEffect } from "react";
import { readAll } from "../services/firebaseUtils";
export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        readAll("SearchTerms", setRecentSearches);
    }, [searchTerm]);

    console.log("recent ", recentSearches);

    const data = { searchTerm, setSearchTerm, recentSearches };
    // console.log(searchTerm);
    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};
export default SearchProvider;
