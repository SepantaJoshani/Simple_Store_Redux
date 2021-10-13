import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";
import NotFounded from "./pages/NotFounded";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/cartSlice";

function App() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    const initialValue = JSON.parse(saved);
    return initialValue || { items: [], totalQuantity: 0, totalAmount: 0 };
  });
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    dispatch(
      cartActions.replaceCart({
        items: products.items || [],
        totalQuantity: products.totalQuantity,
        totalAmount: products.totalAmount,
      })
    );
  }, [dispatch, products]);

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
        <Route path="/checkout" component={Checkout} />
        <Route path="*" component={NotFounded} />
      </Switch>
    </Layout>
  );
}

export default App;
