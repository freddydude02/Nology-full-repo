import Counter from "./components/Counter";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [previousSearches, setPreviousSearches] = useState([]);

    const searchValues = { searchTerm, setSearchTerm };

    let product = undefined;
    if (searchTerm !== "") {
        product = <Counter productName={searchTerm}></Counter>;
    }

    return (
        <div className="App">
            <SearchBar searchValues={searchValues}></SearchBar>
            {product}
        </div>
    );
}

export default App;
