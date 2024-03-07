import Products from "../components/Products";
import { useState, useEffect } from "react";
import { getAllProducts } from "../API/index";

export default function BooksPage() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function retrieveProductList() {
      try {
        const newProducts = await getAllProducts();
        setProductList(newProducts);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveProductList();
  }, []);
  return (
    <>
      <Products products={productList} />
    </>
  );
}