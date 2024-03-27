import { useState, useEffect } from "react";
import { getAllProducts } from "../API/index";
import Search from "../components/Search";

export default function Homepage() {
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

  console.log("Homepage PL: ", productList)
  return (
    <>
      <h2 className="header">Welcome to our store!</h2>
      <Search productList={productList} />
    </>
  );
}