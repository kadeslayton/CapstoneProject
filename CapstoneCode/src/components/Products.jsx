
import ProductPreview from "./ProductPreview";

export default function Products({ products }) {
  return (
    <div className="product-section">
      <h2>Look at All Our Products!</h2>
      <ul className="product-preview">
        {products.map((product, index) => (
          <ProductPreview product={product} key={index} />
        ))}
      </ul>
    </div>
  );
}