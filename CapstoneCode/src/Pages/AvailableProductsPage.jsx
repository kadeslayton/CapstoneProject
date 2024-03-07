import { useState, useEffect } from "react";
import { getAllProducts } from "../API/index";
import AvailableProducts from "../components/AvailableProducts";

export default function AvailableBooksPage() {
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
  return <AvailableProducts products={productList} />;
}