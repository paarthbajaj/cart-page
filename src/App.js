import Cart from "./Components/Cart";
import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

function App() {
  const [cart, SetCart] = useState([]);

  const clickHandler = (item) => {
    SetCart([...cart, item]);
    console.log([...cart, item]);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard clickHandler={clickHandler} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} SetCart={SetCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
