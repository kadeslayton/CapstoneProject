import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import SingleProduct from "./components/SingleProduct";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import Header from "./components/Header";
import './index.css'
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
