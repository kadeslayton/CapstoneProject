
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../API/index";

export default function SingleProduct() {
  const locationInfo = useLocation();
  const product = locationInfo.state.product;
  const {  price,image, category, title, id, description } = product;
  const [available, setAvailable] = useState(product.available);
  const [userKey, setUserKey] = useState(() =>
    localStorage.getItem("current-user-key")
  );

  async function buyProduct(quantity, productId) {
    const response = await addToCart(quantity, productId);
    setAvailable(false);
  }

  return (
    <div className="single-product">
      <div className="info">
        <h2>{title}</h2>
        <h4>{price}</h4>
        <h4>{category}</h4>
        <p>{description}</p>

        {available && userKey ? (
          <button onClick={buyProduct(quantity={quantity}, productId={id}) }>Add to Cart</button>
        ) : !available && userKey ? (
          <h4>Currently Checked Out</h4>
        ) : (
          <h4>
            <Link to="/account">Log In</Link> to checkout as logged in user!
          </h4>
        )}
      </div>
      <div className="product-cover">
        <img src={image} alt={`Cover of ${title}`} />
      </div>
    </div>
  );
}