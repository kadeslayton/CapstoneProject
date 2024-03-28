
import { Link } from "react-router-dom";

export default function Navigation() {
  const userKey = localStorage.getItem("current-user-keys");
  console.log(userKey, typeof userKey)
  return (
    <nav>
      <Link to="/">
        <span className="material-symbols-outlined">Homepage</span>
      </Link>
      <Link to="/cart">Cart</Link>
      {userKey ? (
        <>
          <Link to="/account">Account</Link>
        </>
      ) : (
        <Link to="/account">Log In</Link>
      )}
    </nav>
  );
}