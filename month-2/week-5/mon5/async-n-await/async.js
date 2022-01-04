const fetchFunction = async (url) => {
    apiCall = fetch(url, { mode: "cors" });
    const response = await apiCall;
    console.log(response);
    const json = await response.json();
    console.log(json);
};

fetchFunction("https://catfact.ninja/fact");
