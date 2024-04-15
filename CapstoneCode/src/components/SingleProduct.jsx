
import { useLocation } from "react-router-dom";
import RemoveFromCart from "./RemoveFromCart";
import CartButton from "./AddToCartButton";


export default function SingleProduct({setCart, cart, productList}) {

  const key = localStorage.getItem("current-user-keys")
  const locationInfo = useLocation();
  const product = locationInfo.state.product;
  const {  price,image, category, title, id, description } = product;

  return (
    <div className="single-product">
      <div className="info">
        <h2>{title}</h2>
        <h4>${price}</h4>
        <h4>{category}</h4>
        <p>{description}</p>
        
      </div>
      <div className="product-cover">
        <img src={image} alt={`Cover of ${title}`} />
      </div>
      {key ? (
        <div>
          <CartButton product={product} setCart={setCart} cart={cart} productList={productList}/>
          <RemoveFromCart product={product} setCart={setCart} cart={cart}/>
          {cart.map((item, index)=>{if(item.productId=== id){
            return <p key={index}>Quantity In Cart: {item.quantity}</p>
          }})}
        </div>
        
      ):(
        <h4>Please Log in to add to cart</h4>
      )}
    </div>
  );
}