import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import SingleProduct from "./components/SingleProduct";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import ProductsPage from "./Pages/ProductsPage";
import Header from "./components/Header";
import AvailableProductsPage from "./Pages/AvailableProductsPage";
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/availableproducts" element={<AvailableProductsPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
