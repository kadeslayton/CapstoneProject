import { useState, useEffect } from "react";
export default function RemoveFromCart({product, setCart, cart}){
  const [internalCart, setInternalCart] = useState([])
  useEffect(()=>{
    setInternalCart(cart)
  }, [cart]);
  function removeProduct(e){
    try{
      console.log(cart)
      let copy = internalCart
      
      if(copy.find((prod)=>{ return prod.productId===product.id})){
        for(let i = 0; i < copy.length; i++){
          if((copy[i].productId === product.id)&&(copy[i].quantity > 0)){
            copy[i].quantity = copy[i].quantity -1
            if(copy[i].quantity === 0){
              copy.splice(i,1)
            }
            console.log(copy) 
          }
        }
      }
      
      return setCart(copy)
      
    }catch(error){
      console.log(error)
    }
  }
  
  
    return(
      <>
      <div>
        <button onClick={removeProduct}>Remove 1 from Cart</button>
      </div>
      </>
      
      )};