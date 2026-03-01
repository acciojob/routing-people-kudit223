
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import UserList from "./UserList";
import { Routes,Route } from "react-router-dom";
import UserDetails from "./UserDetails";



const App = () => {
  const [userDetails,setUserDetails]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      if(!response.ok){
        throw new Error(`HTTP Error,Status ${response.status}`);
      }
      return response.json();
    }).then(data=>{
      setUserDetails(()=>{
        return [...data];
      })
    }).catch((error)=>{
      console.log(`Error: ${error.name}, message: ${error.message}`)
    })
  },[]);



  return (
    <div> 
      <Routes>
        <Route path='/' element= {<UserList data={userDetails}/>}/>
        <Route path="/users/:id" element={<UserDetails data={userDetails}/>}/>
      </Routes>
    </div>
  )
}

export default App;
