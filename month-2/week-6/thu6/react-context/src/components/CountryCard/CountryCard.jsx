const CountryCard = ({ countryData }) => {
    return (
        <div>
            <h1>{countryData.name}</h1>
            <h3>{countryData.capital}</h3>
            <h4>{countryData.population}</h4>
            <img src={countryData.coatOfArms}></img>
        </div>
    );
};
export default CountryCard;
