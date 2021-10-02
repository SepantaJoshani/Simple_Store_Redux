import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";
import NotFounded from './pages/NotFounded'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" component={Products} exact />
        <Route path="/products/:productId" component={ProductInfo} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFounded} />
      </Switch>
    </div>
  );
}

export default App;
