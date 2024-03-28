
import { apiLogIn, apiRegister} from "../API/index";
import { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [rUser, setRUser] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [rEmail, setREmail] = useState("");
  const [rFName, setRFName] = useState("");
  const [rLName, setRLName] = useState("");

  const user = {
    username: userName,
    password: userPassword,
  };

  const registree = {
    username: rUser,
    password: rPassword,
    email: rEmail,
    firstname: rFName,
    lastname: rLName
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await apiLogIn(user);
    if (response !== 0) {
      console.log(response)
      const token = response.token;
      localStorage.setItem("current-user-keys", token);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
  
    const response = await apiRegister(registree);
    if (response) {
      console.log("Handle Register: ", response)
      const token = response?.token;
      localStorage.setItem("current-user-keys", token);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
  }
  return (
    <div>
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
    <>
    </>
    <form onSubmit={handleRegister}>
      <h3>Register</h3>
      <label>
        Username:
        <input
          type="username"
          id="Rusername"
          onChange={(e) => setRUser(e.target.value)}
          value={rUser}
        />
      </label>{" "}
      <label>
        Password:
        <input
          type="password"
          id="Rpassword"
          onChange={(e) => setRPassword(e.target.value)}
          value={rPassword}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          id="email"
          onChange={(e) => setREmail(e.target.value)}
          value={rEmail}
        />
      </label>
      <label>
        First Name:
        <input
          type="name"
          id="firstname"
          onChange={(e) => setRFName(e.target.value)}
          value={rFName}
        />
      </label>
      <label>
        Last Name:
        <input
          type="name"
          id="lastname"
          onChange={(e) => setRLName(e.target.value)}
          value={rLName}
        />
      </label>
      <button>
        <span className="material-symbols-outlined">Register</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
    </div>
    

    
  );
}