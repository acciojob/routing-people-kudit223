
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserDetails({ data }) {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => { 
        setLoading(true);
        setUser(null);

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
      if(!response.ok){
        throw new Error(`HTTP Error,Status ${response.status}`);
      }
      return response.json();
    }).then(data=>{
        setTimeout(()=>{
            setUser(data);
        setLoading(false)
        },100);
        
      
    }).catch((error)=>{
      console.log(`Error: ${error.name}, message: ${error.message}`)
    })      
       
    },[id]);
    
    if(loading){
        return <div>Loading...</div>
    }
    
    return (<div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        
    </div>);
}

export default UserDetails;