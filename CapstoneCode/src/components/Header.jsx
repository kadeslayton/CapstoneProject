
export default function Header() {
  const userKey = localStorage.getItem("current-user-keys");
  console.log(userKey)
  function logOut() {
    localStorage.removeItem("current-user-keys");
    location.reload();
  }
  return (
    <div className="header">
      <h1>
        Store App
      </h1>
    
        <button onClick={logOut}>
          Logout
          <span className="material-symbols-outlined"></span>
        </button>
  
    </div>
  );
}