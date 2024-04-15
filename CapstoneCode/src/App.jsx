import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import SingleProduct from "./components/SingleProduct";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import Header from "./components/Header";
import './index.css'
import CartPage from "./Pages/CartPage";
import { getAllProducts } from "./API";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart]  = useState([{productId: 1, quantity: 1},
                                     {productId: 5, quantity: 1},
                                     {productId: 2, quantity: 1}]);
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    async function retrieveList() {
      try {
        const newProducts = await getAllProducts();
        setProductList(newProducts);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveList();
  }, []);
 
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage setCart={setCart} cart={cart} productList={productList}/>} />
          <Route path="/products/:id" element={<SingleProduct setCart={setCart} cart={cart} productList={productList}/>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage setCart={setCart} cart={cart} productList={productList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
