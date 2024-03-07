
export default function Header() {
  const userKey = localStorage.getItem("current-user-key");
  function logOut() {
    localStorage.setItem("current-user-key", "");
    location.reload();
  }
  return (
    <div className="header">
      <h1>
        Store App
      </h1>
      {userKey && (
        <button onClick={logOut}>
          Logout
          <span class="material-symbols-outlined">logout</span>
        </button>
      )}
    </div>
  );
}