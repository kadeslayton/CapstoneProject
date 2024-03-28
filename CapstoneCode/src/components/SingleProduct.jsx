
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../API/index";

export default function SingleProduct() {
  const locationInfo = useLocation();
  const product = locationInfo.state.product;
  const {  price,image, category, title, id, description } = product;
  
  const [userKey, setUserKey] = useState(() =>
    localStorage.getItem("current-user-keys")
  );

  async function buyProduct(quantity, productId) {
    const response = await addToCart(quantity, productId);
    setAvailable(false);
  }

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
    </div>
  );
}