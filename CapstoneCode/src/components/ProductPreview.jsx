import { Link } from "react-router-dom";

export default function ProductPreview({product }) {
  const { price,image, category, title, id } = product;
  return (
    <li>
      <Link to={{ pathname: `/products/${id}` }} state={{ product }}>
        <h3 className="previewTitle">{title}</h3>
        <p>${price}</p>
        <p>{category}</p>
        <img src={image} alt={`${title}`} />
      </Link>
    </li>
  );
}