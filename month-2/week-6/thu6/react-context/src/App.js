import "./App.css";
import CountryContainer from "./containers/CountryContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchProvider from "./context/SearchContext";
import { readAll } from "./services/firebaseUtils";
import RecentSearches from "./components/RecentSearches";

function App() {
    // readAll("SearchTerms", console.log);

    return (
        <div className="App">
            <SearchProvider>
                <SearchBar></SearchBar>
                <RecentSearches></RecentSearches>
                <CountryContainer></CountryContainer>
            </SearchProvider>
        </div>
    );
}

export default App;
