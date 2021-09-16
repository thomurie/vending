import { BrowserRouter, Route } from "react-router-dom";
import Machine from "./components/machine";
import Item from "./components/item";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Machine />
        </Route>
        <Route exact path="/coffee">
          <Item name="coffee" />
        </Route>
        <Route exact path="/rice">
          <Item name="rice" />
        </Route>
        <Route exact path="/dumpling">
          <Item name="dumpling" />
        </Route>
        <Route exact path="/ramen">
          <Item name="ramen" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
