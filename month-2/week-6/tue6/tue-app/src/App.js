import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Students from "./containers/Students";
import Home from "./containers/Home";
import StudentPage from "./containers/StudentPage";
import About from "./containers/About";
function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Students">Students</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/students">
                        <Students></Students>
                    </Route>
                    <Route path="/student/:studentId">
                        <StudentPage></StudentPage>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

{
    /* <Home></Home>
<StudentPage></StudentPage>
<Students></Students> */
}
export default App;
