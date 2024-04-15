
export default function Header() {
  const userKey = localStorage.getItem("current-user-keys");
  function logOut() {
    localStorage.removeItem("current-user-keys");
    location.reload();
  }
  return (
    <div className="header">
      <h1>
        Store App
      </h1>
    
      {userKey ? (<button onClick={logOut} className="logout-btn">
          Logout
          <span className="material-symbols-outlined"></span>
        </button>
      ):(
        <></>
      )};
    </div>
  );
}