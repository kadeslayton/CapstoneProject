
import { apiLogIn } from "../API/index";
import { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = {
    username: userName,
    password: userPassword,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await apiLogIn(user);
    if (response.message === "Login successful!") {
      const token = response?.token;
      localStorage.setItem("current-user-key", token);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>
        Username:
        <input
          type="username"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </label>{" "}
      <label>
        Password:
        <input
          type="password"
          id="password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />
      </label>
      <button>
        <span className="material-symbols-outlined">login</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
  );
}