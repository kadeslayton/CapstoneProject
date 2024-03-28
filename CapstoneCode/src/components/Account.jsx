
import { useEffect, useState } from "react";
import { getUserInfo } from "../API/index";

export default function Account() {
  const [userInfoArray, setUserInfoArray] = useState([]);

  useEffect(() => {
    async function retrieveUserInfo() {
      const id = localStorage.getItem("current-user-keys");
      console.log(id)
      try {
        const userInfoApi = await getUserInfo(id);
        setUserInfoArray(userInfoApi);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveUserInfo();
    
  }, []);
console.log(userInfoArray)

  return (
    <div className="account-info">

      <p>{userInfoArray.address}</p>
      <p>{userInfoArray.id}</p>
      <p>{userInfoArray.email}</p>
      <p>{userInfoArray.username}</p>
      <p>{userInfoArray.password}</p>
      <p>{userInfoArray.name}</p>
      <p>{userInfoArray.phone}</p>
      
    </div>
  );
}