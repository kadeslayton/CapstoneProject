import { useEffect, useState } from "react";
import { GetSingleCart } from "../API/index";

export default function showCart(){
  
  const [cartList, setCartList] = useState([])
  
  async function seeCart(){
    const id = localStorage.getItem("current-user-keys");
    try{
      const response = await GetSingleCart(id)
      return setCartList(response.products);
    }catch(error){
      console.log(error)
    }
    seeCart();
  }
  return(
  <>
  <div>
    {cartList.map((product, index) => {
          return <ProductPreview key={index} product={product} />;
        })}
  </div>
  </>
)}