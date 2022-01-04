import "./App.css";
import { useState, useEffect } from "react";
import { create, readAll } from "./services/firebase-utils";
import personFactory from "./assets/utils/person";
import { update } from "./services/firebase-utils";
import { deleteDoc } from "./services/firebase-utils";

function App() {
    const [personData, setPersonData] = useState({});

    // const person = personFactory(8, "blue", "emily");
    // create(person);
    const id = "1W7A7DQ916QxMNeNHbmT";

    const person = { name: "bobby" };

    update(id, person);

    deleteDoc("1xwK51Ja5iVfIh5x80cY");

    useEffect(() => readAll(setPersonData), []);

    console.log(personData);

    return (
        <div className="App">
            <h1>Firebase!</h1>
        </div>
    );
}

export default App;
