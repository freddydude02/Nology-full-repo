export const getCountry = async (name) => {
    const url = "https://restcountries.com/v3.1/name/";

    let response = await fetch(url + name);
    let json = await response.json();
    // console.log(json);
    return json;
};
