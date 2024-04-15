
import Cart from "../components/Cart.jsx"

export default function CartPage({setCart, cart, productList}) {
  
  const id = localStorage.getItem("current-user-id");
  
  return (
    <>
    {localStorage.getItem("current-user-keys") ? (
        <div>
          <Cart setCart={setCart} cart={cart} productList={productList}/>
        </div>
      ) : (
        <>
          <h2>Please Login to view cart / checkout</h2>
        </>
      )}
      
    </>
  ) 
}