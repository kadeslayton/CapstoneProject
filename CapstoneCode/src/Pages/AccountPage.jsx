import Login from "../components/Login";
import Account from "../components/Account";

export default function AccountPage() {
  const userKey = localStorage.getItem("current-user-keys");
  return (
    <div className="account-section">
      {userKey ? (
        <div>
          <p>{userKey}</p>
          <Account />
        </div>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}