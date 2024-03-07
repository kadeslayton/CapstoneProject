import ProductPreview from "./ProductPreview";

export default function AvailableProducts({ products }) {
  return (
    <div className="product-section">
      <h2>You can purchase these items now!!</h2>
      <ul className="product-preview">
        {products.map((product, index) => {
          if (product.available === true) {
            return <ProductPreview product={product} key={index} />;
          }
        })}
      </ul>
    </div>
  );
}