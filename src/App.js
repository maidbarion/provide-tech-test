import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import ProductNotFound from "./components/ProductNotFound";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="error" element={<ProductNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
