import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";
import NotFounded from './pages/NotFounded'
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";


function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" component={Products} exact />
        <Route path="/products/:productId" component={ProductInfo} />
        <Route path="/cart" component={Cart} exact />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFounded} />
      </Switch>
    </Layout>
  );
}

export default App;
