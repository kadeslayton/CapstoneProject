import { Link } from "react-router-dom";
import CartButton from "./AddToCartButton";
import RemoveFromCart from "./RemoveFromCart";
import { useEffect } from "react";

export default function ProductPreview({product, setCart, cart}) {
  const key = localStorage.getItem("current-user-keys")
  const { price,image, category, title, id, description } = product;
  
  return (
    <li >
      <Link to={{ pathname: `/products/${id}` }} state={{ product }}>
        <h3 className="previewTitle">{title}</h3>
        <p>${price}</p>
        <p>{category}</p>
        <img src={image} alt={`${title}`} />
      </Link>
      {key ? (
        <div>
          {/* <CartButton product={product} setCart={setCart} cart={cart}/>
          <RemoveFromCart product={product} setCart={setCart} cart={cart}/> */}
          {cart.map((item, index)=>{if(item.productId=== id){
            return <p key={index}>Quantity In Cart: {item.quantity}</p>
          }})}
        </div>
      ):(
        <p></p>
      )}
      
    </li>
  );
}