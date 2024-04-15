import { useState, useEffect } from "react";
import { getAllProducts } from "../API/index";
import Search from "../components/Search";

export default function Homepage({setCart, cart, productList}) {
  return (
    <>
      <h2 className="header">Welcome to our store!</h2>
      <Search productList={productList} setCart={setCart} cart={cart} />
    </>
  );
}