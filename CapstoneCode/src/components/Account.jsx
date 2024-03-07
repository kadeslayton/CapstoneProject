
import { useEffect, useState } from "react";
import { getUserInfo } from "../API/index";

export default function Account() {
  const [userInfoArray, setUserInfoArray] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const id = localStorage.getItem("current-user-key");
      try {
        const userInfoApi = await getUserInfo(id);
        setUserInfoArray(userInfoApi);
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfo();
  }, []);


  return (
    <div className="account-info">
      <h1>Account Info</h1>
      <p>First Name: {userInfoArray.firstname}</p>
      <p>Last Name: {userInfoArray.lastname}</p>
      <p>Email: {userInfoArray.email}</p>
    </div>
  );
}