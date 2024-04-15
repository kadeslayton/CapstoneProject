
import { useEffect, useState } from "react"
import ProductPreview from "./ProductPreview.jsx"

export default function Cart({setCart, cart, productList}){
  const [internalCart, setInternalCart] = useState([])
  useEffect(()=>{
    setInternalCart(cart)
  }, [cart]);
  return(
  <>
  <div>
      
      {internalCart != []?(
        <div>
          <div className="cartProds">
            <h2>Please click the Checkout button when you are satisfied with your order!</h2>
            <button className="checkout-btn">Checkout</button>
            <ul>
                {internalCart.map((item, index)=>{
                    const foundProd = productList.find((prod)=>{
                      return item.productId === prod.id
                    })
                    if(foundProd===undefined){
                      return <p key={index}></p>
                    }else{
                      
                      return <div key={index}><ProductPreview key={index} product={foundProd}  cart={internalCart} setCart={setCart}/></div>
                    };
                  })}
              
                  
            </ul>
          </div>
        </div>
        
      ):(
        <h2>No Results</h2>
      )}
  </div>
  </>
)}