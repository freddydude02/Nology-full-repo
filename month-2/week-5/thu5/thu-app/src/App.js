import "./App.css";
import Counter from "./components/Counter";
import LightSwitch from "./components/LightSwitch";

function App() {
    return (
        <div className="App">
            <LightSwitch />
            <Counter productName="T-Shirt" />
            <Counter productName="Jeans" />
            <Counter productName="Hat" />
        </div>
    );
}

export default App;
