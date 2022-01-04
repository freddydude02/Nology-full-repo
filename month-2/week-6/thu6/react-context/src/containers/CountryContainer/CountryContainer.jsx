import CountryCard from "../../components/CountryCard";
import { getCountry } from "../../assets/utils/CountryAPI";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

// const data = {
//     name: "Austrlia",
//     capital: "Canberra",
//     population: 2000000,
//     coatOfArms:
//         "https://upload.wikimedia.org/wikipedia/commons/e/e5/Coat_of_arms_of_Australia.png",
// };

const generateCountryData = (apiData) => {
    const countryDataArray = apiData.map((apiCountry) => {
        const countryData = {};
        countryData.name = apiCountry.name.common;
        countryData.capital = apiCountry.capital;
        countryData.population = apiCountry.population;
        countryData.coatOfArms = apiCountry.coatOfArms.png;
        return countryData;
    });
    return countryDataArray;
};
const CountryContainer = () => {
    const [countryData, setCountryData] = useState([]);
    const data = useContext(SearchContext);
    useEffect(
        () =>
            (async () => {
                let apiData = await getCountry(data.searchTerm);
                let countryData = generateCountryData(apiData);
                // console.log(countryData);
                setCountryData(countryData);
            })(),
        [data.searchTerm]
    );

    // console.log("this is", countryData[0]);
    return countryData.length > 0 ? (
        countryData.map((country) => (
            <CountryCard countryData={country}></CountryCard>
        ))
    ) : (
        <></>
    );
};
export default CountryContainer;
