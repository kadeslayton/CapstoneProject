
import { useEffect, useState } from "react";
import { getUserInfo, getAllUserInfo } from "../API/index";


export default function Account() {
  const [userInfoArray, setUserInfoArray] = useState([]);
 const [allUsers, setAllUsers] = useState([])
 const [userAddress, setUserAddress] = useState([])

  useEffect(() => {
    async function retrieveAllUsers(){
      try{
        const allUsersApi = await getAllUserInfo();
        setAllUsers(allUsersApi);
      } 
      catch(error){
        console.log(error);
      }
    }
    retrieveAllUsers();
  }, []);

  useEffect(()=>{
    async function matchUser(){
      const username= localStorage.getItem("current-user-name")
      try{
        for(let i = 0;i < allUsers.length; i++){
          if(allUsers[i].username===username){
            localStorage.setItem("current-user-id", allUsers[i].id)
            setUserInfoArray(allUsers[i])
            if(userInfoArray.address != undefined){
            return setUserAddress(userInfoArray.address)
            } 
          }
        }
      }catch(error){
        console.log(error)
      }
    }
    matchUser();
    
  })
  console.log(userInfoArray)
  
  return (
    <div>
      <h2>User Information</h2>
     <table className="account-info">
      <tbody>
        <tr><td>User ID:</td><td>{userInfoArray.id}</td></tr>
        <tr><td>Email:</td><td>{userInfoArray.email}</td></tr>
        <tr><td>Username:</td><td>{userInfoArray.username}</td></tr>
        <tr><td>Address:</td><td>{userAddress.number}&nbsp;{userAddress.street}<br></br>{userAddress.city}, USA<br></br>{userAddress.zipcode}</td></tr>
        <tr><td>Phone Number:</td><td>{userInfoArray.phone}</td></tr>
      </tbody>
    </table> 
    </div>
    
  );
}