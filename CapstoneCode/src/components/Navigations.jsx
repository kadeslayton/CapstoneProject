
import { Link } from "react-router-dom";

export default function Navigation() {
  const userKey = localStorage.getItem("current-user-key");

  return (
    <nav>
      <Link to="/">
        <span className="material-symbols-outlined">search</span>
      </Link>
      <Link to="/products">See All Products</Link>
      {userKey ? (
        <>
          <Link to="/availableproducts">Available Products</Link>
          <Link to="/account">Account</Link>
        </>
      ) : (
        <Link to="/account">Log In</Link>
      )}
    </nav>
  );
}